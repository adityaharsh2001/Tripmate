const {Package} = require('../models');
const {Category} = require('../models');
const ApiError = require('../utils/ApiError');
const httpStatus = require('http-status');

const createPackage = async (packageBody) => {
  return Package.create(packageBody);
};

const getPackages = async () => {
  return Package.find();
};

const getFeaturedPackages = async () => {
  return Package.find();
}
const getPackageById = async (id) => {
  return Package.findById(id);
}

const updatePackageById = async (id
  , updateBody) => {
  const package = await getPackageById(id);
  if (!package) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Package not found');
  }
  Object.assign(package, updateBody);
  await package.save();
  return package;
}
const getPackagesByCategory = async (category) => {
  console.log("getPackagesByCategory", category);
  return Package.find({
    category
  });
}
const deletePackageById = async (id
) => {
  const package = await getPackageById(id);
  if
  (!package) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Package not found');
  }
  await package.remove();
  return package;
}

const createCategory = async (categoryBody) => {
  return Category.create(categoryBody);
}

const getCategories = async () => {
  console.log("getCategories", Category.find({}));
  return Category.find({});
}

const getCategoryById = async (id) => {
  return Category
    .findById(id);
}

const updateCategoryById = async (id
  , updateBody) => {
  const category = await getCategoryById(id);
  if (!category) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Category not found');
  }
  Object.assign(category, updateBody);
  await category.save();
  return category;
}

const deleteCategoryById = async (id
) => {
  const category = await getCategoryById(id);
  if (!category) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Category not found');
  }
  await category.remove();
  return category;
}


module.exports = {
  createPackage,
  getPackages,
  getPackageById,
  updatePackageById,
  deletePackageById,
  createCategory,
  getCategories,
  getCategoryById,
  updateCategoryById,
  deleteCategoryById,
  getFeaturedPackages,
  getPackagesByCategory
};


