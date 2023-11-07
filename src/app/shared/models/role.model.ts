const DEFAULT_VALUES = {
  authority: null,
  created: null,
  id: null,
  updated: null,
  username: null,
}

export class Role {
  authority: string;
  created: string;
  id: string;
  updated: string;
  username: string;

  constructor(role: object = DEFAULT_VALUES) {
    Object.assign(this, role)
  }
}
