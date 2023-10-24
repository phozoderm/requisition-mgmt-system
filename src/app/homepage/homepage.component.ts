import {Component} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {vesselData} from './data'

type Vessel = {
  name: string;
  projects: Project[];
}

type Project = {
  name: string;
  stage: 0 | 1 | 2 | 3 | 4 | 5;
  requisitions: Requisition[];
  fields: ProjectField[];
}

type ProjectField = {
  title: string;
  value: string;
}

type Requisition = {
  name: string;
  items: RequisitionItem[]
}
type RequisitionItem = {
  itemCode: string;
  description: string;
  unit: string;
  quantity: number;
  price: number;
  remark: string;
  cost: string;
  selectedSupplier: string;
  supplierRemark: string;
  selected?: boolean;
}

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent {
  protected readonly Number = Number;

  toastMessage = ''
  isToastShown = false;
  isToastError = false

  modalInput = ''
  modalOpenEvent = ''

  tableHeaders = [
    "Number", "Item Code", "Description", "Unit", "Quantity", "Price", "Total", "Remark", "Cost", "Selected supplier", "Supplier remark"
  ]
  itemCodeSortDirection: null | 'asc' | 'des' = null

  vesselList: Vessel[] = vesselData as Vessel[]

  selectedVessel = this.vesselList[0]
  selectedProject = this.selectedVessel.projects[0]
  selectedRequisition = this.selectedProject.requisitions[0]
  selectedRequisitionOriginalItems: RequisitionItem[] = []

  constructor(private modalService: NgbModal) {
  }

  onVesselClick(vessel: Vessel) {
    if (vessel === this.selectedVessel) {
      return
    }
    this.selectedVessel = vessel
    this.selectedProject = vessel.projects[0]
    this.selectedRequisition = this.selectedProject.requisitions[0]
    for (const items of this.selectedRequisition.items) {
      items.selected = false
    }
  }

  onProjectClick(project: Project) {
    if (project === this.selectedProject) {
      return
    }
    this.selectedProject = project
    this.selectedRequisition = this.selectedProject.requisitions[0]
    for (const items of this.selectedRequisition.items) {
      items.selected = false
    }
  }

  onRequisitionClick(requisition: Requisition) {
    this.selectedRequisition = requisition
    for (const items of this.selectedRequisition.items) {
      items.selected = false
    }
  }

  onItemSelected(requisitionItem: RequisitionItem) {
    requisitionItem.selected = !requisitionItem.selected
  }

  onAddAmountClick(modalContent: any) {
    const selectedItems = this.selectedRequisition.items.filter(item => item.selected)
    if (selectedItems.length === 0) {
      this.isToastShown = true
      this.isToastError = true
      this.toastMessage = 'Please select items.'
      return;
    }

    this.modalOpenEvent = 'addAmount'
    this.openModal(modalContent)
  }

  onAddPercentageClick(modalContent: any) {
    const selectedItems = this.selectedRequisition.items.filter(item => item.selected)
    if (selectedItems.length === 0) {
      this.isToastShown = true
      this.isToastError = true
      this.toastMessage = 'Please select items.'
      return;
    }

    this.modalOpenEvent = 'addPercentage'
    this.openModal(modalContent)
  }

  // todo requisition degistirince itemlar selected: true kaliyor, resetlenmeli

  openModal(content: any) {
    this.modalInput = '0'
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then(
      () => {
        const inputValue = Number(this.modalInput)
        const selectedItems = this.selectedRequisition.items.filter(item => item.selected)
        for (const selectedItem of selectedItems) {
          if (this.modalOpenEvent === 'addAmount') {
            selectedItem.quantity = selectedItem.quantity + inputValue
          } else if (this.modalOpenEvent === 'addPercentage') {
            selectedItem.price = Math.round(selectedItem.price * inputValue / 100 + selectedItem.price)
          }
        }
        this.isToastError = false
        if (this.modalOpenEvent === 'addAmount') {
          this.toastMessage = 'Amounts are added.'
        } else if (this.modalOpenEvent === 'addPercentage') {
          this.toastMessage = 'Percentages are added.'
        } else {
          this.toastMessage = ''
        }
        this.isToastShown = true
      },
    );
  }

  onModalInputChange($event: any) {
    this.modalInput = $event.target.value
  }

  onTableHeaderClick(header: string) {
    if (header !== 'Item Code') {
      return
    }
    if (this.itemCodeSortDirection === null) {
      this.selectedRequisitionOriginalItems = [...this.selectedRequisition.items]
    }

    if (this.itemCodeSortDirection === 'asc') {
      this.itemCodeSortDirection = 'des'
      this.selectedRequisition.items.sort((a, b) => a.itemCode > b.itemCode ? -1 : 1)
    } else if (this.itemCodeSortDirection === 'des') {
      this.itemCodeSortDirection = null
      this.selectedRequisition.items = [...this.selectedRequisitionOriginalItems]
    } else if (this.itemCodeSortDirection === null) {
      this.itemCodeSortDirection = 'asc'
      this.selectedRequisition.items.sort((a, b) => a.itemCode > b.itemCode ? 1 : -1)
    }
  }
}
