import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';
@Component({
 selector: 'app-header',
 templateUrl: './header.component.html',
 styleUrls: ['header.component.css']
})
export class HeaderComponent {
    logo: string = '/assets/menu.png';
    @Input()
    title: string;
    @Input()
    leftNav: boolean = true;

    @Input()
    rightNav: boolean = true;
    otherInfo: string = 'sensative information are here';

    @Output() toggleMenuOuput: EventEmitter<boolean> = new EventEmitter<boolean>();

    toggleMenu: boolean = true;

    onMenuPress() {
        this.toggleMenu = !this.toggleMenu;
        this.toggleMenuOuput.emit(this.toggleMenu);
    }
}
