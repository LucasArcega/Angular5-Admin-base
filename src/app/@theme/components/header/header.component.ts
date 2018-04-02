import { Component, Input, OnInit } from '@angular/core';

import { NbMenuService, NbSidebarService } from '@nebular/theme';
import { UserService } from '../../../@core/data/users.service';
import { AnalyticsService } from '../../../@core/utils/analytics.service';
import { AuthService } from '../../../services/auth.service';

@Component({
	selector: 'ngx-header',
	styleUrls: ['./header.component.scss'],
	templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {


	@Input() position = 'normal';

	user: any;

	userMenu = [
		{ title: 'Meus Dados' },
		{
			title: 'Logout',
			target: "#logout-trigger"
		}
	];

	logout(){
		debugger;
		this.auth.logout();
	}

	constructor(private sidebarService: NbSidebarService,
		private menuService: NbMenuService,
		private userService: UserService,
		private analyticsService: AnalyticsService, private auth:AuthService) {
	}

	ngOnInit() {
		this.userService.getUsers()
			.subscribe((users: any) => this.user = users.nick);
	}

	toggleSidebar(): boolean {
		this.sidebarService.toggle(true, 'menu-sidebar');
		return false;
	}

	toggleSettings(): boolean {
		this.sidebarService.toggle(false, 'settings-sidebar');
		return false;
	}

	goToHome() {
		this.menuService.navigateHome();
	}

	startSearch() {
		this.analyticsService.trackEvent('startSearch');
	}
}
