import { AbstractIconLib } from '../iconlib';

export var fontawesome5Iconlib = AbstractIconLib.extend({
  mapping: {
    collapse: 'caret-down',
    expand: 'caret-right',
    "delete": 'times',
    edit: 'pen',
    add: 'plus',
    cancel: 'ban',
    save: 'save',
    moveup: 'arrow-up',
    movedown: 'arrow-down',
    copy: 'copy',
    clear: 'times-circle',
    time: 'clock',
    calendar: 'calendar'
  },
  icon_prefix: 'fas fa-'
});
