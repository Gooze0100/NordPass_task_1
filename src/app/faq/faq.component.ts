import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
})
export class FAQComponent implements OnInit {
  listOfText = [
    {
      heading: 'Why should you use a password manager for business?',
      text1:
        'Running a business comes with managing a lot of different devices and accounts. The easiest way to keep track of their login credentials is to use a password manager.',
      text2:
        'With a password manager, your employees can store all their logins in one place, share them with coworkers, and access them on multiple devices with one password only. No excuse for forgetting passwords after a long vacation or for sharing passwords via email!',
    },
    {
      heading: 'How to choose the best password manager for business?',
      text1: '',
      text2: '',
    },
    {
      heading: 'How can I get a business password manager?',
      text1: '',
      text2: '',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
