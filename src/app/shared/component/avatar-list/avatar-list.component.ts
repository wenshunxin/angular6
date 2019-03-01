import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-avatar-list',
  templateUrl: './avatar-list.component.html',
  styles:[`
    .avatar-list{
        display:flex;
    }
    li{
        margin-left:-8px;
    }
  `]
})
export class AvatarListComponent implements OnInit {
    aa=[
        'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png', // Alipay
        'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png', // Angular
        'https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png'
    ]

    @Input() avatars:any;
    constructor() { }

    ngOnInit() {
    }

}
