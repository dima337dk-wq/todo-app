import { test } from '@playwright/test';
import {Home} from "../page-objects/pages/Home";

test('TL-19-1 Check item creation', async ({page}) => {
    const home = new Home(page)
    await home.goto()
    const item1 = await home.createItem('TEST 1')
    await item1.checkItemVisible()
})

test('TL-19-2 Check two item creation', async ({page}) => {
    const home = new Home(page)
    await home.goto()
    const item1 = await home.createItem('TEST 1')
    await item1.checkItemVisible()
    const item2 = await home.createItem('TEST 2')
    await item2.checkItemVisible()
    await home.checkCountOfItems(2)
})

test('TL-19-3 Check item activation', async ({page}) => {
    const home = new Home(page)
    await home.goto()
    const item1 = await home.createItem('TEST1')
    await item1.checkItemVisible()
    await item1.checkIsMarked(false)
    await item1.markAsCompleted()
    await item1.checkIsMarked(true)
})

test('TL-19-4 Check item deletion', async ({page}) => {
    const home = new Home(page)
    await home.goto()
    const item1 = await home.createItem('TEST1')
    await item1.checkItemVisible()
    await item1.deleteItem()
    await item1.checkItemVisible(false)
})

test('TL-19-5 Check clear completed button usage', async ({page}) => {
    const home = new Home(page)
    await home.goto()
    const item1 = await home.createItem('TEST1')
    const item2 = await home.createItem('TEST2')
    await item1.checkItemVisible(true)
    await item2.checkItemVisible(true)
    await item2.markAsCompleted()
    await home.checkCountOfItems(2)
    await home.clickClearCompletedButton()
    await home.checkCountOfItems(1)
    await item1.checkItemVisible(true)
    await item2.checkItemVisible(false)
})

test('TL-19-6 Check completed button usage', async ({page}) => {
    const home = new Home(page)
    await home.goto()
    const item1 = await home.createItem('TEST 1')
    const item2 = await home.createItem('TEST 2')
    await item1.checkItemVisible(true)
    await item2.checkItemVisible(true)
    await item2.markAsCompleted()
    await home.checkCountOfItems(2)
    await home.clickCompletedButton()
    await home.checkCountOfItems(1)
})