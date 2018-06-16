import { Component, Input, OnChanges, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-star',
    templateUrl:'./star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
    starWidth: number;
    @Input()
    rating:number;
    @Output()
    notify:EventEmitter<String>= new EventEmitter<String>();

    ngOnChanges(){
        this.starWidth=this.rating * 75/5
        console.log(this.starWidth);
    }
    onClick() {
        this.notify.emit(`This rating is clicked: ${this.rating}`);
    }
}