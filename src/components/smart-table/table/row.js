import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';

import { SmartTableColType } from '../types';
import {
  KEY_PREFIX,
  resolveLinkDestination,
  resolveColClassname,
  resolveColValue,
} from '../utils';

const renderValueAsIcon = colvalue => {
  const type = (colvalue && 'check') || 'close';
  return type;
};

const renderActionsButton = (id, basedest) => (
  <td key={`${KEY_PREFIX}::tbody::tr::${id}::actions`}>
    <Link to={`${basedest}/edit`} className="">
      <i className="icon icon-edit" />
    </Link>
    <Link to={`${basedest}/delete`} className="">
      <i className="icon icon-delete" />
    </Link>
  </td>
);

const SmartTableRow = ({ cols, data, location }) => {
  const idkey = cols.find(obj => obj.primary).key;
  const itemid = data[idkey];
  const destinationBase = resolveLinkDestination(location, itemid);
  return (
    <tr data-id={itemid}>
      {cols &&
        cols.map(col => {
          const useicon = col.type === 'bool';
          const colvalue = resolveColValue(data, col);
          const classname = resolveColClassname(col);
          return (
            <td
              key={`${KEY_PREFIX}::tbody::tr::${itemid}::td::${col.key}`}
              className={classname}>
              <Link to={`${destinationBase}/edit`} className="">
                {!useicon && <span>{colvalue}</span>}
                {useicon && renderValueAsIcon(colvalue)}
              </Link>
            </td>
          );
        })}
      {renderActionsButton(itemid, destinationBase)}
    </tr>
  );
};

SmartTableRow.propTypes = {
  cols: SmartTableColType.isRequired,
  data: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export default withRouter(SmartTableRow);