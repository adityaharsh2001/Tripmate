const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');

const {packageService} = require('../services');

const createPackage = catchAsync(async (req, res) => {
  const package = await packageService.createPackage({
    ...req.body,
  });
  res.status(httpStatus.CREATED).send(package);
});
getFeaturedPackages = catchAsync(async (req, res) => {
  const packages = await packageService.getFeaturedPackages();
  res.send(packages);
});
const getPackages = catchAsync(async (req, res) => {
  if (req.query.category === 'all') {
    const packages = await packageService.getPackages({});
    res.send(packages);
  } else {
    const packages = await packageService.getPackagesByCategory(req.query.category);
    res.send(packages);
  }
});

const getPackage = catchAsync(async (req, res) => {
  const package = await packageService.getPackageById(req.params.packageId);
  res.send(package);
});

const updatePackage = catchAsync(async (req, res) => {
  const package = await packageService.updatePackageById(req.params.packageId, req.body);
  res.send(package);
});

const deletePackage = catchAsync(async (req, res) => {
  await packageService.deletePackageById(req.params.packageId);
  res.status(httpStatus.NO_CONTENT).send();
});

const createCategory = catchAsync(async (req, res) => {
  const category = await packageService.createCategory(req.body);
  res.status(httpStatus.CREATED).send(category);
});

const getCategories = catchAsync(async (req, res) => {
  const categories = await packageService.getCategories();
  res.send(categories);
});

const getCategory = catchAsync(async (req, res) => {
  const category = await packageService.getCategoryById(req.params.categoryId);
  res.send(category);
});

const updateCategory = catchAsync(async (req, res) => {
  const category = await packageService.updateCategoryById(req.params.categoryId, req.body);
  res.send(category);
});

const deleteCategory = catchAsync(async (req, res) => {
  await packageService.deleteCategoryById(req.params.categoryId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createPackage,
  getPackages,
  getPackage,
  updatePackage,
  deletePackage,
  createCategory,
  getCategories,
  getCategory,
  updateCategory,
  deleteCategory,
  getFeaturedPackages
};

