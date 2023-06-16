import { EventInterface } from 'interfaces/event';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface VenueInterface {
  id?: string;
  name: string;
  address: string;
  user_id?: string;
  created_at?: any;
  updated_at?: any;
  event?: EventInterface[];
  user?: UserInterface;
  _count?: {
    event?: number;
  };
}

export interface VenueGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  address?: string;
  user_id?: string;
}
