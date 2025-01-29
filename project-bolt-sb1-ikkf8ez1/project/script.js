// Initialize Lucide icons
lucide.createIcons();

// Mock employee data
const employees = [
  {
    id: 1,
    name: 'Sarah Johnson',
    email: 'sarah.j@company.com',
    phone: '(555) 123-4567',
    department: 'Engineering',
    role: 'Senior Developer',
    status: 'Active',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    id: 2,
    name: 'Michael Chen',
    email: 'michael.c@company.com',
    phone: '(555) 234-5678',
    department: 'Design',
    role: 'UI/UX Designer',
    status: 'Remote',
    imageUrl: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    email: 'emily.r@company.com',
    phone: '(555) 345-6789',
    department: 'Marketing',
    role: 'Marketing Manager',
    status: 'On Leave',
    imageUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  }
];

// DOM Elements
const employeeList = document.getElementById('employeeList');
const searchInput = document.getElementById('searchInput');
const departmentFilter = document.getElementById('departmentFilter');
const statusFilter = document.getElementById('statusFilter');

// Helper function to get status badge class
function getStatusBadgeClass(status) {
  switch (status.toLowerCase()) {
    case 'active':
      return 'status-active';
    case 'on leave':
      return 'status-leave';
    case 'remote':
      return 'status-remote';
    default:
      return 'status-active';
  }
}

// Render employees
function renderEmployees(employeesToRender) {
  employeeList.innerHTML = employeesToRender.map(employee => `
    <tr class="employee-card hover:bg-gray-50">
      <td class="px-6 py-4 whitespace-nowrap">
        <div class="flex items-center">
          <div class="flex-shrink-0 h-10 w-10">
            <img class="h-10 w-10 rounded-full" src="${employee.imageUrl}" alt="${employee.name}">
          </div>
          <div class="ml-4">
            <div class="text-sm font-medium text-gray-900">${employee.name}</div>
            <div class="text-sm text-gray-500">${employee.role}</div>
          </div>
        </div>
      </td>
      <td class="px-6 py-4 whitespace-nowrap">
        <div class="text-sm text-gray-900">${employee.email}</div>
        <div class="text-sm text-gray-500">${employee.phone}</div>
      </td>
      <td class="px-6 py-4 whitespace-nowrap">
        <div class="text-sm text-gray-900">${employee.department}</div>
      </td>
      <td class="px-6 py-4 whitespace-nowrap">
        <span class="status-badge ${getStatusBadgeClass(employee.status)}">
          ${employee.status}
        </span>
      </td>
      <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <button class="text-indigo-600 hover:text-indigo-900 mr-3">Edit</button>
        <button class="text-red-600 hover:text-red-900">Delete</button>
      </td>
    </tr>
  `).join('');
}

// Filter employees
function filterEmployees() {
  const searchTerm = searchInput.value.toLowerCase();
  const departmentValue = departmentFilter.value;
  const statusValue = statusFilter.value;

  const filtered = employees.filter(employee => {
    const matchesSearch = employee.name.toLowerCase().includes(searchTerm) ||
                         employee.role.toLowerCase().includes(searchTerm) ||
                         employee.department.toLowerCase().includes(searchTerm);
    
    const matchesDepartment = !departmentValue || employee.department === departmentValue;
    const matchesStatus = !statusValue || employee.status === statusValue;

    return matchesSearch && matchesDepartment && matchesStatus;
  });

  renderEmployees(filtered);
}

// Event listeners
searchInput.addEventListener('input', filterEmployees);
departmentFilter.addEventListener('change', filterEmployees);
statusFilter.addEventListener('change', filterEmployees);

// Initial render
renderEmployees(employees);