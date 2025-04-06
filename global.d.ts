// global.d.ts
import type { IStaticMethods } from 'preline/dist';
import type noUiSlider from 'nouislider';
import type _ from 'lodash';
import type jQuery from 'jquery';

// 1) 公式型定義があるもの
declare global {
  interface Window {
    _: typeof _;              // lodash
    $: typeof jQuery;         // jQuery
    jQuery: typeof jQuery;
    noUiSlider: typeof noUiSlider; // noUiSlider
    HSStaticMethods: IStaticMethods; // Preline UI
  }
}

// 2) 公式型定義がない or バージョンが合わないもの => unknown / 独自型
declare global {
  interface Window {
    DataTable: unknown;
    Dropzone: unknown; // or typeof import('dropzone') if型定義があるなら差し替え
    VanillaCalendarPro: unknown; // あるいは自作型
  }
}

export {};
