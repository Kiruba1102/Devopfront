import { render, screen } from '@testing-library/react';

import "@testing-library/jest-dom";
import Employee from './Components/Employee';
import Salary from './Components/Salary';
import Salaryfindall from './Components/Salaryfindall';
jest.mock("react-router-dom");



test('renders Add Employee component', () => {
  render(<Employee />);
                  
  const addEmployeeElement = screen.getByRole("names");
  expect(addEmployeeElement).toBeInTheDocument();
});

test('renders Add role component', () => {
  render(<Employee />);
                  
  const addEmployeeElement = screen.getByRole("roles");
  expect(addEmployeeElement).toBeInTheDocument();
});

test('renders Add address component', () => {
  render(<Employee />);
                  
  const addEmployeeElement = screen.getByRole("add");
  expect(addEmployeeElement).toBeInTheDocument();
});

test('renders Add bloodgroup component', () => {
  render(<Employee />);
                  
  const addEmployeeElement = screen.getByRole("blood");
  expect(addEmployeeElement).toBeInTheDocument();
});

test('renders Add salary id component', () => {
  render(<Salary />);
                  
  const addSalaryElement = screen.getByRole("salid");
  expect(addSalaryElement).toBeInTheDocument();
});

test('renders monthly salary  component', () => {
  render(<Salary />);
                  
  const addSalaryElement = screen.getByRole("monsal");
  expect(addSalaryElement).toBeInTheDocument();
});

test('renders yearly salary  component', () => {
  render(<Salary />);
                  
  const addSalaryElement = screen.getByRole("yearsal");
  expect(addSalaryElement).toBeInTheDocument();
});

test('renders employee salary  component', () => {
  render(<Salary />);
                  
  const addSalaryElement = screen.getByRole("eeid");
  expect(addSalaryElement).toBeInTheDocument();
});

test('renders employee salary id in getAll  component', () => {
  render(<Salaryfindall />);
                  
  const allSalaryElement = screen.getByRole("ssid");
  expect(allSalaryElement).toBeInTheDocument();
});

test('renders employee salary  in getAll  component', () => {
  render(<Salaryfindall />);
                  
  const allSalaryElement = screen.getByRole("sall");
  expect(allSalaryElement).toBeInTheDocument();
});

test('renders employee yearly salary in getAll  component', () => {
  render(<Salaryfindall />);
                  
  const allSalaryElement = screen.getByRole("ctcc");
  expect(allSalaryElement).toBeInTheDocument();
});

test('renders employee id in getAll  component', () => {
  render(<Salaryfindall />);
                  
  const allSalaryElement = screen.getByRole("empp");
  expect(allSalaryElement).toBeInTheDocument();
});

test('renders employee name in getAll  component', () => {
  render(<Salaryfindall />);
                  
  const allSalaryElement = screen.getByRole("namee");
  expect(allSalaryElement).toBeInTheDocument();
});

test("renders insert employee button ", () => {
  render(<Employee/>);
  const linkElement = screen.getByRole("button");
  expect(linkElement).toBeInTheDocument();
});

test("renders insert salary button ", () => {
  render(<Salary />);
  const linkElement = screen.getByRole("button");
  expect(linkElement).toBeInTheDocument();
});


