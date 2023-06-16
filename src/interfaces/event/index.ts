import { VenueInterface } from 'interfaces/venue';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface EventInterface {
  id?: string;
  name: string;
  date: any;
  venue_id?: string;
  user_id?: string;
  created_at?: any;
  updated_at?: any;

  venue?: VenueInterface;
  user?: UserInterface;
  _count?: {};
}

export interface EventGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  venue_id?: string;
  user_id?: string;
}
