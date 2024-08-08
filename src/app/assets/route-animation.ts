import { trigger, transition, query, style, animate } from '@angular/animations';

export const slideInAnimation = 
  trigger('routeAnimation', [
    transition('* <=> *', [
      query(':enter, :leave', [
        style({
          position: 'absolute',
          left: 0,
          width: '100%',
          opacity: 0,
          transform: 'scale 0 transitionY(100%)'})
      ], { optional: true }),
      query(':enter', [
        animate('1000ms ease', style({opacity: 1, transition: 'scale 1 transitionY(100%)'}))
      ], { optional: true })
    ])
  ])
