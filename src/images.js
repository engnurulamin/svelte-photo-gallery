import { writable } from "svelte/store";

export let images = writable([
  { id: 1, img: "images/15.jpg", checked: false },
  { id: 2, img: "images/2.jpg", checked: false },
  { id: 3, img: "images/3.jpg", checked: false },
  { id: 4, img: "images/4.jpg", checked: false },
  { id: 5, img: "images/5.jpg", checked: false },
  { id: 6, img: "images/6.jpg", checked: false },
  { id: 7, img: "images/7.jpg", checked: false },
  { id: 8, img: "images/8.jpg", checked: false },
  { id: 9, img: "images/9.jpg", checked: false },
  { id: 10, img: "images/10.jpg", checked: false },
  { id: 11, img: "images/11.jpg", checked: false },
  { id: 12, img: "images/12.jpg", checked: false },
]);
