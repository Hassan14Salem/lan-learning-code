import {
	trigger,
	animate,
	style,
	transition,
	state
} from '@angular/animations';


export const customAnimations = [	    
  trigger('routeAnimations', [
    transition('* <=> *', [
      style({ opacity: 0, transform: 'translateY(20px)' }),
      animate('3000ms ease-in-out', style({ opacity: 1, transform: 'translateY(0)' }))
    ])
  ])
]