Class Calculator {
	constructor(previousOperandTextElement, currentOperandTextElement){
	this.previousOperandTextElement = previousOperandTextElement
	this.currentOperandTextElement = currentOperandTextElement
	this.clear()
	}
	clear() {
		This.currentOperand = ‘’
		this.previousOperand = ‘’
		This.operation = undefined
	}
	delete() {
		this.currentOperand = this.currentOperand.toString().slice(0, -1)
	}
	appendNumber(number) {
		If (number === ‘.’ && this.currentOperand.includes(‘.’)) return
		this.currentOperand = this.currentOperand.toString() + number.toString()
	}
	chooseOperation(operation) {
		If (this.currentOperand === ‘’) return
		If (this.previousOperand !== ‘’) {
		this.compute()
	}
		This.operation = operation
		this.previousOperand = this.currentOperand
		this.currentOperand = ‘’
	}
	compute() {
		Let computation
		Const prev = parseFloat(this.previousOperand)
	Const current = parseFloat(this.currentOperand)
	If (isNaN(prev) || isNaN(current)) return
	Switch (this.operation) {
		Case ‘+‘:
			Computation = prev + current
			Break
		Case ‘-‘:
			Computation = prev - current
			Break
	Case ‘*‘:
			Computation = prev * current
			Break
	Case ‘/‘:
			Computation = prev / current
			Break
		Default:
			return
	}
	this.currentOperand = computation
	This.operation = undefined
		this.previousOperand = ‘’
	}
	getDisplayNumber(number) {
		Const stringNumber = number.toString()
		Const integerDigits = parseFloat(stringNumber.split(‘.’)[0])
		Const decimalDigits = stringNumber.split(‘.’)[1]
		Let integerDisplay
		If (isNaN(integerDigits)) {
			integerDisplay = ‘’
	} else {
		integerDisplay = integerDigits.toLocaleString( ‘en’, {
		maximumFractionDigits: 0 })
	}
	If (decimalDigits != null) {
			Return ‘${integerDisplay}.${decimalDigits}
	} else {
		Return integerDisplay
	}
	}
	updateDisplay() {
		this.currentOperandTextElement.innerText = this.currentOperand
		If (this.operation != null) {
			this.previousOperandTextElement.innerText = this.previousOperand
				‘${this.previousOperand} ${this.operation}’
		} else {
			this.previousOperandTextElement.innerText = ‘’
	}
	}
}
Const numberButtons = document.querySelectorAll(‘[data-number]’)
Const operationButtons = document.querySelectorAll(‘[data-operation]’)
Const equalsButton = document.querySelector(‘[data-equals]’)
Const deleteButton = document.querySelector(‘[data-delete]’)
Const allClearButton = document.querySelector(‘[data-all-clear]’)
Const previousOperandTextElement = document.querySelector(‘[data-previous-operand]’)
Const currentOperandTextElement = document.querySelector(‘[data-current-operand]’)
Const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)
numberButtons.forEach(button => {
	button.addEventListener(‘click’, () => {
	calculator.appendNumber(button.innerText)
	calculator.updateDisplay()
})
})
operationButtons.forEach(button => {
	button.addEventListener(‘click’, () any {
	calculator.chooseOperation(button.innerText)
	calculator.updateDisplay()
})
})
equalsButton.addEventListener(‘click’, button => {
	calculator.compute()
	calculator.updateDisplay()
})
deleteButton.addEventListener(‘click’, button => {
	calculator.clear()
	calculator.updateDisplay()
})
