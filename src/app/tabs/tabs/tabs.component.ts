import { TabComponent } from '../../tabs/tab/tab.component';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'trm-tabs',
    templateUrl: './tabs.component.html',
    styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

    private tabList: Array<TabComponent> = [];

    constructor() {}

    ngOnInit() {
    }

    addTab(tab: TabComponent) {
        if (this.tabList.length === 0) {
            this.select(tab);
        }
        this.tabList.push(tab);
    }

    select(tab: TabComponent) {
        this.tabList.forEach(tab => {
            tab.selected = false;
        })
        tab.show();
    }

}
