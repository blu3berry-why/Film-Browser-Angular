import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchResult } from 'src/app/models/film/searchResults';
import { FilmServiceService } from 'src/app/services/film-service.service';

@Component({
  selector: 'app-search-film',
  templateUrl: './search-film.component.html',
  styleUrls: ['./search-film.component.css'],
})
export class SearchFilmComponent implements OnInit {
  form: FormGroup;
  page: number = 1;

  constructor(
    private filmService: FilmServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.form = new FormGroup({
      queryString: new FormControl('', {
        validators: [Validators.required],
      }),
    });
    if (route.snapshot.fragment == null) {
      this.searchString = localStorage.getItem('query') ?? '';
      this.page = Number(localStorage.getItem('page') ?? 1);
      this.filmService
        .getByNameAndPage(this.searchString, this.page)
        .subscribe((res) => (this.searchResult = res));
    } else {
      this.searchString = '';
      this.router.navigate(['/search/movies']);
    }

    this.form.controls.queryString.setValue(this.searchString);
  }

  ngOnInit(): void {}

  public searchResult!: SearchResult;
  private searchString = '';

  /**
   * returns the first page of the search
   * @param searchString the query
   */
  getFilms(searchString: string) {
    if (typeof searchString != 'undefined' && searchString) {
      this.filmService.getByName(searchString).subscribe((res) => {
        this.searchResult = res;
        this.searchString = searchString;
        console.log(res);
      });
      localStorage.setItem('query', searchString);
    }
    this.form.controls.queryString.setErrors({ incorrect: true });
  }

  /**
   * turns to the next page
   * @returns nothing
   */
  getNextPage() {
    if (
      this.searchResult.page == this.searchResult.total_pages ||
      this.searchResult == undefined
    ) {
      console.log('wrong');
      return;
    }
    this.filmService
      .getByNameAndPage(this.searchString, this.searchResult.page + 1)
      .subscribe((res) => {
        this.searchResult = res;

        this.page = this.searchResult.page;
        localStorage.setItem('page', this.searchResult.page.toString());
      });
  }

  /**
   * turns to the previous page
   * @returns nothing
   */
  getPreviousPage() {
    if (this.searchResult.page == 1 || this.searchResult == undefined) {
      return;
    }
    this.filmService
      .getByNameAndPage(this.searchString, this.searchResult.page - 1)
      .subscribe((res) => {
        this.searchResult = res;

        this.page = this.searchResult.page;
        localStorage.setItem('page', this.searchResult.page.toString());
      });
  }
}
