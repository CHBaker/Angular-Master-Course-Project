import { TabsComponent } from '../../tabs/tabs/tabs.component';
import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'trm-tab',
    templateUrl: './tab.component.html',
    styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {

    @Input() selected = false;
    @Input() title = '';

    constructor(private parent: TabsComponent) { }

    ngOnInit() {
        this.parent.addTab(this);
    }

    show(isVisible = true) {
        this.selected = isVisible;
    }

}
