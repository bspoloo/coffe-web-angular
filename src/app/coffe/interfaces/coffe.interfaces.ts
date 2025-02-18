export interface Coffe {
  id:          number;
  name:        string;
  image:       string
  description: string;
  created_at:  Date;
  updated_at:  Date;
  isAvaile:    boolean;
  flavors:     Flavor[];
}

export interface Flavor {
  id:   number;
  name: string;
}
