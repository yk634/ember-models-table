import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class CommonTableController extends Controller {
  @service() fw;

  get settingsComponentName() {
    if (this.fw.isPaper) {
      return 'common-table-settings-paper';
    }
    if (this.fw.isBs3) {
      return 'common-table-settings-bs3';
    }
    if (this.fw.isBs4) {
      return 'common-table-settings-bs4';
    }
    return 'common-table-settings-plain-html';
  }

  @tracked showComponentFooter = true;
  @tracked showColumnsDropdown = true;
  @tracked useFilteringByColumns = true;
  @tracked showGlobalFilter = true;
  @tracked useNumericPagination = false;
  @tracked doFilteringByHiddenColumns = false;
  @tracked filteringIgnoreCase = false;
  @tracked multipleColumnsSorting = true;

  @tracked showPageSize = true;
  @tracked collapseNumPaginationForPagesCount = 1;
  @tracked showCurrentPageNumberSelect = true;

  @tracked currentPageNumber = 4;

  @action
  updateArgs(k, v) {
    this[k] = v;
  }
}
