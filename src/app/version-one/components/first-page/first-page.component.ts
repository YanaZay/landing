import { Component, OnInit } from '@angular/core';
import * as am5 from '@amcharts/amcharts5';
import * as am5percent from '@amcharts/amcharts5/percent';
import am5themes_Micro from '@amcharts/amcharts5/themes/animated';

@Component({
  selector: 'first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.scss']
})
export class FirstPageComponent implements OnInit {

  constructor() { }

  public ngOnInit(): void {
    this.viewCharts();
  }

  public viewCharts(): void {
    let root = am5.Root.new("chart");

    root.setThemes([
      am5themes_Micro.new(root)
    ]);

    let chart = root.container.children.push(am5percent.PieChart.new(root, {
      layout: root.verticalLayout,
      innerRadius: am5.percent(50), // отвечает за внутреннее отверстие
    }));

    let series = chart.series.push(am5percent.PieSeries.new(root, {
      valueField: "value",
      categoryField: "category",
      alignLabels: true,
    }));

    series.labels.template.setAll({
      textType: "circular",
      centerX: 0,
      centerY: 0,
    });

    series.data.setAll([
      { value: 28, category: "Downloads" },
      { value: 22, category: "Users" },
      { value: 37, category: "Subscribers" },
      { value: 13, category: "Products" },
    ]);

    series.appear(1000, 100);

    // root.setThemes.rule("ColorSet").set('colors', [
    //   am5.color('#24afb5'),
    //   am5.color('#d3eff0'),
    //   am5.color('#dbdbdb'),
    //   am5.color('#f7f7f7')
    // ])
  }

}
