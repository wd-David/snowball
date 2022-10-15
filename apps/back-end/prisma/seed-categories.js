const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const categories = [
  // Incomes
  {
    mainCategory: 'Income',
    subCategory: 'W2 Income',
  },
  {
    mainCategory: 'Income',
    subCategory: 'Bonuses',
  },
  {
    mainCategory: 'Income',
    subCategory: 'Investment income',
  },
  {
    mainCategory: 'Income',
    subCategory: 'Gifts',
  },
  {
    mainCategory: 'Income',
    subCategory: 'Others',
  },

  // Savings
  {
    mainCategory: 'Savings',
    subCategory: 'Emergency fund',
  },
  {
    mainCategory: 'Savings',
    subCategory: 'Investing fund',
  },
  {
    mainCategory: 'Savings',
    subCategory: 'Home fund',
  },
  {
    mainCategory: 'Savings',
    subCategory: 'Others',
  },

  // Food
  {
    mainCategory: 'Food',
    subCategory: 'Groceries',
  },
  {
    mainCategory: 'Food',
    subCategory: 'Restaurants',
  },
  {
    mainCategory: 'Food',
    subCategory: 'Others',
  },

  // Clothes
  {
    mainCategory: 'Clothes',
    subCategory: 'New clothes',
  },
  {
    mainCategory: 'Clothes',
    subCategory: 'Dry cleaning',
  },
  {
    mainCategory: 'Clothes',
    subCategory: 'Others',
  },

  // Housing
  {
    mainCategory: 'Housing',
    subCategory: 'Mortgage',
  },
  {
    mainCategory: 'Housing',
    subCategory: 'Rent',
  },
  {
    mainCategory: 'Housing',
    subCategory: 'Home insurance',
  },
  {
    mainCategory: 'Housing',
    subCategory: 'Property tax',
  },
  {
    mainCategory: 'Housing',
    subCategory: 'Home Maintenance',
  },
  {
    mainCategory: 'Housing',
    subCategory: 'Home Improvement',
  },
  {
    mainCategory: 'Housing',
    subCategory: 'Others',
  },

  // Home Supplies
  {
    mainCategory: 'Home Supplies',
    subCategory: 'Cleaning supplies',
  },
  {
    mainCategory: 'Home Supplies',
    subCategory: 'General household supplies',
  },
  {
    mainCategory: 'Home Supplies',
    subCategory: 'Electrical appliances',
  },
  {
    mainCategory: 'Home Supplies',
    subCategory: 'Tools',
  },
  {
    mainCategory: 'Home Supplies',
    subCategory: 'Furniture',
  },
  {
    mainCategory: 'Home Supplies',
    subCategory: 'Decoration',
  },
  {
    mainCategory: 'Home Supplies',
    subCategory: 'Others',
  },

  // Utilities
  {
    mainCategory: 'Utilities',
    subCategory: 'Electric',
  },
  {
    mainCategory: 'Utilities',
    subCategory: 'Gas',
  },
  {
    mainCategory: 'Utilities',
    subCategory: 'Water',
  },
  {
    mainCategory: 'Utilities',
    subCategory: 'Internet',
  },
  {
    mainCategory: 'Utilities',
    subCategory: 'Others',
  },

  // Transportation
  {
    mainCategory: 'Transportation',
    subCategory: 'Auto loan',
  },
  {
    mainCategory: 'Transportation',
    subCategory: 'Gas',
  },
  {
    mainCategory: 'Transportation',
    subCategory: 'Road/Bridge toll',
  },
  {
    mainCategory: 'Transportation',
    subCategory: 'Maintenance(oil change, tires, etc.)',
  },
  {
    mainCategory: 'Transportation',
    subCategory: 'Larger service (brakes, fluids, etc.)',
  },
  {
    mainCategory: 'Transportation',
    subCategory: 'Parking fee',
  },
  {
    mainCategory: 'Transportation',
    subCategory: 'Public transportation',
  },
  {
    mainCategory: 'Transportation',
    subCategory: 'Others',
  },

  // Personal Growth
  {
    mainCategory: 'Personal Growth',
    subCategory: 'Online courses',
  },
  {
    mainCategory: 'Personal Growth',
    subCategory: 'Books',
  },
  {
    mainCategory: 'Personal Growth',
    subCategory: 'Attending conference',
  },
  {
    mainCategory: 'Personal Growth',
    subCategory: 'Software subscriptions',
  },
  {
    mainCategory: 'Personal Growth',
    subCategory: 'Others',
  },

  // Leisure
  {
    mainCategory: 'Leisure',
    subCategory: 'Travel',
  },
  {
    mainCategory: 'Leisure',
    subCategory: 'Hobbies',
  },
  {
    mainCategory: 'Leisure',
    subCategory: 'Others',
  },

  // Personal
  {
    mainCategory: 'Personal',
    subCategory: 'Health care',
  },
  {
    mainCategory: 'Personal',
    subCategory: 'Nutritional supplement',
  },
  {
    mainCategory: 'Personal',
    subCategory: 'Hair salon',
  },
  {
    mainCategory: 'Personal',
    subCategory: 'Beauty products',
  },
  {
    mainCategory: 'Personal',
    subCategory: 'Others',
  },
]

const generateCategories = async function main() {
  await prisma.category.createMany({
    data: categories,
  })
}

module.exports = generateCategories
