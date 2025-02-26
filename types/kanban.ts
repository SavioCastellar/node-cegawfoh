export enum TaskStatus {
  DRAFT = 'DRAFT',
  SUBMITTED = 'SUBMITTED',
  APPROVED = 'APPROVED',
  REJECTED = 'REJECTED',
}

export enum TaskType {
  TAX_FILING = 'TAX_FILING',
  AUDIT = 'AUDIT',
  COMPLIANCE = 'COMPLIANCE',
  CONSULTANCY = 'CONSULTANCY',
}

export enum Priority {
  HIGH = 'HIGH',
  MEDIUM = 'MEDIUM',
  LOW = 'LOW',
}

export interface Task {
  id: string;
  title: string;
  clientName: string;
  deadline: string;
  priority: Priority;
  type: TaskType;
  status: TaskStatus;
  attachments: string[];
  comments: Comment[];
  columnId: string;
  createdAt: string;
  updatedAt: string;
}

export interface Comment {
  id: string;
  text: string;
  userId: string;
  createdAt: string;
}

export interface Column {
  id: string;
  title: string;
  tasks: string[];
}