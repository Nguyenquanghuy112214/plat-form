import { Group } from '../../utils/typeorm';
import {
  CreateGroupParams,
  FetchGroupsParams,
  TransferOwnerParams,
} from '../../utils/types';

export interface IGroupService {
  createGroup(params: CreateGroupParams);
  getGroups(params: FetchGroupsParams): Promise<Group[]>;
  findGroupById(id: number): Promise<Group>;
  saveGroup(group: Group): Promise<Group>;
  transferGroupOwner(params: TransferOwnerParams): Promise<Group>;
}
