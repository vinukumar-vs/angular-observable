import { Directive, OnInit, ElementRef, HostListener } from '@angular/core';
import { GlobalContextService } from '../services/global-context.service';
import { Router } from '@angular/router';

@Directive({
  selector: '[appAddToGroup]'
})
export class AddToGroupDirective implements OnInit {

  @HostListener("click", ['$event']) onclick(event) {
    this.globalContext.setContext(this.globalContext.TYPES.ADD_TO_GROUP, {"identifier": "do_xyz"});
    this.router.navigateByUrl('*', { state: { addToGroup: true } });
  }

  constructor(
    private globalContext: GlobalContextService,
    private router:Router,
    private el: ElementRef
  ) { 
    el.nativeElement.style.display = 'none';
  }

  ngOnInit() {
    let groupContext = this.globalContext.TYPES.ADD_TO_GROUP;
    let globalContext = this.globalContext.getContext(groupContext);
    if(globalContext) {
      this.el.nativeElement.style.display = "block";
    }
  }
}

//# sourceMappingURL=pathToSourceMaps