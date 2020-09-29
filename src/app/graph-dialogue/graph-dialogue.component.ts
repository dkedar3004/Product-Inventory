import { Component, OnInit, ViewChild, ElementRef, Inject } from '@angular/core';
import { ChartModule } from 'angular2-highcharts';
import * as highcharts from 'highcharts';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from 'constants';
@Component({
  selector: 'app-graph-dialogue',
  templateUrl: './graph-dialogue.component.html',
  styleUrls: ['./graph-dialogue.component.css']
})
export class GraphDialogueComponent implements OnInit {
  innerWidth = window.innerWidth;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {

    this.options = {

      title: { text: 'Product Inventory : Most Viewed Products' },

      chart: { type: 'column' },

      xAxis: {
        categories: this.products
      },

      series: [{
        data: this.value

      }]

    };
    
  }
  products = [];
  value = [];
  options: Object;

  ngOnInit() {
    console.log(this.data.graph);
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.data.graph.length; i++) {
      this.products.push(this.data.graph[i].product_name);
      this.value.push(this.data.graph[i].qty);
    }
    console.log(this.products);
    console.log(this.value);
  }

}
//

