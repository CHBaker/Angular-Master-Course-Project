import { TabComponent } from '../../tabs/tab/tab.component';
import { Component, AfterContentInit, ContentChildren, QueryList } from '@angular/core';

@Component({
    selector: 'trm-tabs',
    templateUrl: './tabs.component.html',
    styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements AfterContentInit {

    @ContentChildren(TabComponent)
    tabs: QueryList<TabComponent>;

    constructor() {}

    ngAfterContentInit() {
        this.select(this.tabs.first);
    }

    select(tab: TabComponent) {
        this.tabs.forEach(tab => {
            tab.selected = false;
        })
        tab.selected = true;
    }

}
