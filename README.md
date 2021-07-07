# basic-project-shoppinglist-receiplist

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/basic-project-shoppinglist-receiplist)

In "component-and-data-binding" branch updated the main project using Data binding and event binding.
Mainly used @Output, @Input and @ViewChild directives and ElementRef, EventEmitter from angular core.

Updated the main brach(master) in below prospectives,
  1. Added navigation using "*ngIf*" directive and @Output() sending data from header componenet to root component
  2. Based on data get from header component, displayed the single component either Recipe or Shopping-list Component.
  3. Later in recipe component sent data from recipe-list to recipe-details on clicking a particular recipe in recipe-item component. This is done by @Output and @Input directive in Recipe Component.
  4. Using @ViewChild() directive taken data from view(html) in shopping-edit and send them to shopping-list ingredient.
  5. This is the whole summery of component-and-data-binding branch.

