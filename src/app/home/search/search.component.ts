import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search.service';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass'],
  providers: [SearchService]
})
export class SearchComponent implements OnInit {
    results: object;
    searchTerm = new Subject<string>();

    constructor(private searchService: SearchService) {
        this.searchService.search(this.searchTerm)
            .subscribe(data => {
                this.results = data; });
    }

  ngOnInit() {
  }

}
