/* eslint-disable no-underscore-dangle */

import { format, unformat } from "./utils";

import $ from "jquery";
import { bind } from "./directive";
import options from "./options";

const widget = {
  _create () {
    const instanceOptions = this.options;
    this.element.each((index, element) => {
      bind(element, instanceOptions);
    });
  },

  options,

  val (val) {
    const instanceOptions = this.options;

    if (Number(val) === val) {
      this.element.each((index, element) => {
        element.value = format(val, this.options);
      });

      return this;
    }

    return unformat(this.element.val(), instanceOptions.precision);
  },
};

export default () => {
  $(() => {
    $.widget("custom.vMoney", widget);
  });
};
