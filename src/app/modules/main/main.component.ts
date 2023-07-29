import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  mainTabs: any[] = [
    { id: 0, text: 'Home', icon: 'home', route: '/application/home' },
    { id: 1, text: 'About', icon: 'info', route: '/application/about' },
    { id: 2, text: 'Services', icon: 'preferences', route: '/application/services' },
    { id: 3, text: 'Contact', icon: 'contacts', route: '/application/contact' }
  ];

  selectedTabIndex: number = 0;

  constructor(private router: Router) { }


  /** This method gets called when 117 or 121 tab is clicked under Buffer Color tab and  assign the selected tab */
  onTabSelection(event: any) {
    const selectedTab = event?.itemData;
    if (selectedTab) {
      this.router.navigateByUrl(selectedTab.route);
      this.selectedTabIndex = selectedTab.id;
    }
  }

  ngOnInit(): void {
  }

  onLogoutClick() {
    // redirect to logout page with respective auth message.
    this.router.navigateByUrl('/login');
  }

}
