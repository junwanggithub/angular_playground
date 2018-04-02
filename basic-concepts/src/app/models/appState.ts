import { Profile } from './profile';
import { Tenant } from './tenant';
import { Login } from './Login';
import { Filters } from './Filters';

export interface AppState {
    profile: Profile,
    tenant: Tenant,
    login: Login,
    filters: Filters
}