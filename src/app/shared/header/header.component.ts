import { Component, Input, EventEmitter, Output } from '@angular/core';
@Component({
 selector: 'app-header',
 templateUrl: './header.component.html',
 styleUrls: ['header.component.css']
})
export class HeaderComponent {
    logo: string = 'http://diylogodesigns.com/blog/wp-content/uploads/2016/04/google-logo-icon-PNG-Transparent-Background.png';
    @Input()
    title: string;
    otherInfo: string = 'sensative information are here';

    @Output() toggleMenuOuput: EventEmitter<boolean> = new EventEmitter<boolean>();

    toggleMenu: boolean = false;

    onMenuPress() {
        this.toggleMenu = !this.toggleMenu;
        this.toggleMenuOuput.emit(this.toggleMenu);
    }
}
