import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  cards = [
    {
      title: 'Free',
      price: '$0',
      features: [
        'Single User',
        '5GB Storage',
        'Unlimited Public Projects',
        'Community Access',
        'Unlimited Private Projects',
        'Dedicated Phone Support',
        'Free Subdomain',
        'Monthly Status Reports',
      ],
      textSymbol:[true,true,true,true,false,false,false,false]
    },
    {
      title: 'Plus',
      price: '$9',
      features: [
        '5 Users',
        '50GB Storage',
        'Unlimited Public Projects',
        'Community Access',
        'Unlimited Private Projects',
        'Dedicated Phone Support',
        'Free Subdomain',
        'Monthly Status Reports',
      ],
      textSymbol:[true,true,true,true,true,true,true,false]
    },
    {
      title: 'Pro',
      price: '$49',
      features: [
        'Unlimited Users',
        '150GB Storage',
        'Unlimited Public Projects',
        'Community Access',
        'Unlimited Private Projects',
        'Dedicated Phone Support',
        'Unlimited Free Subdomains',
        'Monthly Status Reports',
      ],
      textSymbol:[true,true,true,true,true,true,true,true]
    }
  ];
}


