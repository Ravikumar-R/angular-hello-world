import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  messageFromParent = 'We name you good';
  languages = ['Tamil', 'English'];
  title = 'hello-world';
  name = 'Ravi';
  country = 'enter country';
  state = 'enter state';
  city = 'enter city';
  DOJ = new Date();
  disableDOJ = true;
  displaySmallText = true;
  warning = '';
  comments = '';
  commentsThere = false;
  conditionClass = {
    'text-small': this.displaySmallText,
    'text-large': !this.displaySmallText,
    'text-italic': true
  };
  styleClass = {
    fontStyle: 'italic'
  }
  callCountry(event) {
    console.log('event received');
    this.country = 'india';
  }
  checkComments() {
    if (this.comments.length > 0) {
      this.commentsThere = true;
    } else {
      this.commentsThere = false;
    }
  }
  validate(value) {
    this.warning = value + ' is not valid';
  }
}
