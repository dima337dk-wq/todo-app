import {expect, Locator} from "@playwright/test";

export default class TodoItem {
    private readonly source: Locator
    private readonly completedCheckbox: Locator
    private readonly itemText: Locator
    private readonly deleteItemButton: Locator

    constructor(sourceElement: Locator) {
        this.source = sourceElement
        this.completedCheckbox = sourceElement.getByTestId('todo-item-toggle')
        this.itemText = sourceElement.getByTestId('todo-item-label')
        this.deleteItemButton = sourceElement.getByTestId('todo-item-button')
    }

    async checkItemVisible(visible = true): Promise<void> {
        await expect(this.itemText).toBeVisible({visible})
    }

    async markAsCompleted(): Promise<void> {
        await this.completedCheckbox.click()
    }

    async checkIsMarked(marked: boolean): Promise<void> {
        expect(await this.source.getAttribute('class')).toBe(marked ? 'completed' : '')
    }

    async deleteItem(): Promise<void> {
        await this.itemText.hover()
        await this.deleteItemButton.click()
    }
}