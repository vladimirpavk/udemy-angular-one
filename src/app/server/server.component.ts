// tslint:disable-next-line:eofline
// tslint:disable-next-line:no-trailing-whitespace
import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent {
    public title = 'My Server Component';

    public changeTitle() {
        this.title = 'Title has been changed';
    }

    public getTitle(): string {
        return this.title;
    }
}
