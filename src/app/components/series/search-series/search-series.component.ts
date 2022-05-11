import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SeriesSearchResult } from 'src/app/models/series/series';
import { SeriesService } from 'src/app/services/series.service';

@Component({
  selector: 'app-search-series',
  templateUrl: './search-series.component.html',
  styleUrls: ['./search-series.component.css'],
})
export class SearchSeriesComponent implements OnInit {
  form: FormGroup;
  page: number = 1;

  constructor(
    private service: SeriesService,
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
      this.service
        .getByNameAndPage(this.searchString, this.page)
        .subscribe((res) => (this.searchResult = res));
    } else {
      this.searchString = '';
      this.router.navigate(['/search/series']);
    }

    this.form.controls.queryString.setValue(this.searchString);
  }

  ngOnInit(): void {}

  public searchResult!: SeriesSearchResult;
  private searchString = '';

  /**
   * returns the first page of the search
   * @param searchString the query
   */
  getSeries(searchString: string) {
    if (typeof searchString != 'undefined' && searchString) {
      this.service.getByName(searchString).subscribe((res) => {
        this.searchResult = res;
        this.searchString = searchString;
        console.log(res);
      });
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
    this.service
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
    this.service
      .getByNameAndPage(this.searchString, this.searchResult.page - 1)
      .subscribe((res) => {
        this.searchResult = res;
        this.page = this.searchResult.page;
        localStorage.setItem('page', this.searchResult.page.toString());
      });
  }
}
