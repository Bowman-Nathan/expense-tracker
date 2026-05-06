import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
    selector: 'app-add-expense',
    imports: [FormsModule],
    templateUrl: './add-expense.html'
})
export class AddExpenseComponent {
    title = '';
    amount = 0;
    category = 'Personal';
}