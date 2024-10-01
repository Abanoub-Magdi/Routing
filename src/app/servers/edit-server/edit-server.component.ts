import { Component, OnInit } from '@angular/core';
import { ServersService } from '../servers.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {
  server: { id: number, name: string, status: string };
  serverName = '';
  serverStatus = '';

  constructor(private serversService: ServersService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    // Log query parameters and fragment
    this.route.queryParams.subscribe();
    this.route.fragment.subscribe();

    // Fetch server based on route parameter
    const id = +this.route.snapshot.params['id']; // Get 'id' from the route
    this.server = this.serversService.getServer(id);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {
      name: this.serverName,
      status: this.serverStatus
    });
  }
}
