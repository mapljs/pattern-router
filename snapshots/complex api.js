(m, p) => {
  if (m === 'POST') {
    if (p === '/auth/register') {
      return 'POST /auth/register';
    } else if (p === '/auth/login') {
      return 'POST /auth/login';
    } else if (p === '/auth/logout') {
      return 'POST /auth/logout';
    } else if (p === '/auth/refresh') {
      return 'POST /auth/refresh';
    } else if (p === '/auth/password/forgot') {
      return 'POST /auth/password/forgot';
    } else if (p === '/auth/password/reset') {
      return 'POST /auth/password/reset';
    } else if (p === '/auth/sso') {
      return 'POST /auth/sso';
    } else if (p === '/user') {
      return 'POST /user';
    } else if (p === '/user/me') {
      return 'POST /user/me';
    } else if (p === '/user/notifications/read-all') {
      return 'POST /user/notifications/read-all';
    } else if (p === '/org') {
      return 'POST /org';
    } else if (p === '/files/upload') {
      return 'POST /files/upload';
    } else if (p === '/search/filters') {
      return 'POST /search/filters';
    } else if (p === '/tags') {
      return 'POST /tags';
    } else if (p === '/admin/impersonate') {
      return 'POST /admin/impersonate';
    }
    let r =
      /^(?:\/(?:user(?:\/notifications\/(?<notification>[^/]+)\/read()$|\/(?<user>[^/]+)(?:()$|\/invites(?:()$|\/(?<invite>[^/]+)\/(?:accept()$|resend()$))))|org\/(?<org>[^/]+)\/(?:members(?:()$|\/(?<member>[^/]+)()$)|roles(?:()$|\/(?<role>[^/]+)()$)|domains(?:()$|\/(?<domain>[^/]+)()$)|projects(?:()$|\/(?<project>[^/]+)\/(?:members()$|tasks(?:()$|\/(?:t(?:ime-entries(?:()$|\/(?<entry>[^/]+)()$)|ags()$)|attachments()$))))|tasks\/(?<task>[^/]+)\/(?:a(?:ssign()$|ttachments()$)|status()$|comments()$|t(?:ime-entries(?:()$|\/(?<entry>[^/]+)\/stop()$)|ags()$))|billing\/(?:subscription(?:()$|\/cancel()$)|invoices\/(?<invoice>[^/]+)()$|payment-methods()$)|api-keys()$|webhooks()$))|$.)/.exec(
        p,
      );
    if (r !== null) {
      if (r[2] === '') {
        return 'POST /user/notifications/:notification/read';
      } else if (r[4] === '') {
        return 'POST /user/:user';
      } else if (r[5] === '') {
        return 'POST /user/:user/invites';
      } else if (r[7] === '') {
        return 'POST /user/:user/invites/:invite/accept';
      } else if (r[8] === '') {
        return 'POST /user/:user/invites/:invite/resend';
      } else if (r[10] === '') {
        return 'POST /org/:org/members';
      } else if (r[12] === '') {
        return 'POST /org/:org/members/:member';
      } else if (r[13] === '') {
        return 'POST /org/:org/roles';
      } else if (r[15] === '') {
        return 'POST /org/:org/roles/:role';
      } else if (r[16] === '') {
        return 'POST /org/:org/domains';
      } else if (r[18] === '') {
        return 'POST /org/:org/domains/:domain';
      } else if (r[19] === '') {
        return 'POST /org/:org/projects';
      } else if (r[21] === '') {
        return 'POST /org/:org/projects/:project/members';
      } else if (r[22] === '') {
        return 'POST /org/:org/projects/:project/tasks';
      } else if (r[23] === '') {
        return 'POST /org/:org/projects/:project/tasks/time-entries';
      } else if (r[25] === '') {
        return 'POST /org/:org/projects/:project/tasks/time-entries/:entry';
      } else if (r[26] === '') {
        return 'POST /org/:org/projects/:project/tasks/tags';
      } else if (r[27] === '') {
        return 'POST /org/:org/projects/:project/tasks/attachments';
      } else if (r[29] === '') {
        return 'POST /org/:org/tasks/:task/assign';
      } else if (r[30] === '') {
        return 'POST /org/:org/tasks/:task/attachments';
      } else if (r[31] === '') {
        return 'POST /org/:org/tasks/:task/status';
      } else if (r[32] === '') {
        return 'POST /org/:org/tasks/:task/comments';
      } else if (r[33] === '') {
        return 'POST /org/:org/tasks/:task/time-entries';
      } else if (r[35] === '') {
        return 'POST /org/:org/tasks/:task/time-entries/:entry/stop';
      } else if (r[36] === '') {
        return 'POST /org/:org/tasks/:task/tags';
      } else if (r[37] === '') {
        return 'POST /org/:org/billing/subscription';
      } else if (r[38] === '') {
        return 'POST /org/:org/billing/subscription/cancel';
      } else if (r[40] === '') {
        return 'POST /org/:org/billing/invoices/:invoice';
      } else if (r[41] === '') {
        return 'POST /org/:org/billing/payment-methods';
      } else if (r[42] === '') {
        return 'POST /org/:org/api-keys';
      } else if (r[43] === '') {
        return 'POST /org/:org/webhooks';
      }
    }
  } else if (m === 'GET') {
    if (p === '/auth/sso/providers') {
      return 'GET /auth/sso/providers';
    } else if (p === '/user/me') {
      return 'GET /user/me';
    } else if (p === '/user/me/preferences') {
      return 'GET /user/me/preferences';
    } else if (p === '/user/me/sessions') {
      return 'GET /user/me/sessions';
    } else if (p === '/user/notifications') {
      return 'GET /user/notifications';
    } else if (p === '/search') {
      return 'GET /search';
    } else if (p === '/search/filters') {
      return 'GET /search/filters';
    } else if (p === '/tags') {
      return 'GET /tags';
    } else if (p === '/status') {
      return 'GET /status';
    } else if (p === '/admin/reports/time') {
      return 'GET /admin/reports/time';
    } else if (p === '/admin/users') {
      return 'GET /admin/users';
    } else if (p === '/admin/projects') {
      return 'GET /admin/projects';
    } else if (p === '/admin/audit-logs') {
      return 'GET /admin/audit-logs';
    } else if (p === '/admin/stats') {
      return 'GET /admin/stats';
    }
    let r =
      /^(?:\/(?:user\/(?<user>[^/]+)(?:()$|\/(?:notifications()$|invites\/(?<invite>[^/]+)()$))|org\/(?<org>[^/]+)(?:()$|\/(?:members()$|roles()$|domains()$|projects\/(?<project>[^/]+)(?:()$|\/(?:members()$|activity()$|tasks(?:()$|\/(?:time-entries()$|attachments()$))))|tasks(?:()$|\/(?<task>[^/]+)(?:()$|\/(?:comments()$|time-entries()$|attachments()$)))|billing\/(?:p(?:lans()$|ayment-methods()$)|subscription()$|invoices(?:()$|\/(?<invoice>[^/]+)()$))|api-keys()$|webhooks(?:()$|\/(?<hook>[^/]+)\/deliveries(?:()$|\/(?<delivery>[^/]+)()$))))|files\/(?<file>.+)()$|admin\/reports\/(?:projects\/(?<project>[^/]+)\/summary()$|users\/(?<user>[^/]+)\/activity()$))|$.)/.exec(
        p,
      );
    if (r !== null) {
      if (r[2] === '') {
        return 'GET /user/:user';
      } else if (r[3] === '') {
        return 'GET /user/:user/notifications';
      } else if (r[5] === '') {
        return 'GET /user/:user/invites/:invite';
      } else if (r[7] === '') {
        return 'GET /org/:org';
      } else if (r[8] === '') {
        return 'GET /org/:org/members';
      } else if (r[9] === '') {
        return 'GET /org/:org/roles';
      } else if (r[10] === '') {
        return 'GET /org/:org/domains';
      } else if (r[12] === '') {
        return 'GET /org/:org/projects/:project';
      } else if (r[13] === '') {
        return 'GET /org/:org/projects/:project/members';
      } else if (r[14] === '') {
        return 'GET /org/:org/projects/:project/activity';
      } else if (r[15] === '') {
        return 'GET /org/:org/projects/:project/tasks';
      } else if (r[16] === '') {
        return 'GET /org/:org/projects/:project/tasks/time-entries';
      } else if (r[17] === '') {
        return 'GET /org/:org/projects/:project/tasks/attachments';
      } else if (r[18] === '') {
        return 'GET /org/:org/tasks';
      } else if (r[20] === '') {
        return 'GET /org/:org/tasks/:task';
      } else if (r[21] === '') {
        return 'GET /org/:org/tasks/:task/comments';
      } else if (r[22] === '') {
        return 'GET /org/:org/tasks/:task/time-entries';
      } else if (r[23] === '') {
        return 'GET /org/:org/tasks/:task/attachments';
      } else if (r[24] === '') {
        return 'GET /org/:org/billing/plans';
      } else if (r[25] === '') {
        return 'GET /org/:org/billing/payment-methods';
      } else if (r[26] === '') {
        return 'GET /org/:org/billing/subscription';
      } else if (r[27] === '') {
        return 'GET /org/:org/billing/invoices';
      } else if (r[29] === '') {
        return 'GET /org/:org/billing/invoices/:invoice';
      } else if (r[30] === '') {
        return 'GET /org/:org/api-keys';
      } else if (r[31] === '') {
        return 'GET /org/:org/webhooks';
      } else if (r[33] === '') {
        return 'GET /org/:org/webhooks/:hook/deliveries';
      } else if (r[35] === '') {
        return 'GET /org/:org/webhooks/:hook/deliveries/:delivery';
      } else if (r[37] === '') {
        return 'GET /files/:file+';
      } else if (r[39] === '') {
        return 'GET /admin/reports/projects/:project/summary';
      } else if (r[41] === '') {
        return 'GET /admin/reports/users/:user/activity';
      }
    }
  } else if (m === 'PATCH') {
    if (p === '/user/me/preferences') {
      return 'PATCH /user/me/preferences';
    }
    let r =
      /^(?:\/(?:org\/(?<org>[^/]+)(?:()$|\/(?:projects\/(?<project>[^/]+)()$|tasks\/(?<task>[^/]+)()$|webhooks\/(?<hook>[^/]+)()$))|search\/filters\/(?<filter>[^/]+)()$|tags\/(?<tag>[^/]+)()$)|$.)/.exec(
        p,
      );
    if (r !== null) {
      if (r[2] === '') {
        return 'PATCH /org/:org';
      } else if (r[4] === '') {
        return 'PATCH /org/:org/projects/:project';
      } else if (r[6] === '') {
        return 'PATCH /org/:org/tasks/:task';
      } else if (r[8] === '') {
        return 'PATCH /org/:org/webhooks/:hook';
      } else if (r[10] === '') {
        return 'PATCH /search/filters/:filter';
      } else if (r[12] === '') {
        return 'PATCH /tags/:tag';
      }
    }
  } else if (m === 'DELETE') {
    let r =
      /^(?:\/(?:user\/me\/sessions\/(?<session>[^/]+)()$|org\/(?<org>[^/]+)(?:()$|\/(?:projects\/(?<project>[^/]+)(?:()$|\/tasks\/(?:tags()$|fields\/(?<field>[^/]+)()$))|tasks\/(?<task>[^/]+)(?:()$|\/(?:tags()$|fields\/(?<field>[^/]+)()$))|billing\/payment-methods\/(?<method>[^/]+)()$|api-keys\/(?<key>[^/]+)()$|webhooks\/(?<hook>[^/]+)()$))|files\/(?<file>.+)()$|search\/filters\/(?<filter>[^/]+)()$|tags\/(?<tag>[^/]+)()$)|$.)/.exec(
        p,
      );
    if (r !== null) {
      if (r[2] === '') {
        return 'DELETE /user/me/sessions/:session';
      } else if (r[4] === '') {
        return 'DELETE /org/:org';
      } else if (r[6] === '') {
        return 'DELETE /org/:org/projects/:project';
      } else if (r[7] === '') {
        return 'DELETE /org/:org/projects/:project/tasks/tags';
      } else if (r[9] === '') {
        return 'DELETE /org/:org/projects/:project/tasks/fields/:field';
      } else if (r[11] === '') {
        return 'DELETE /org/:org/tasks/:task';
      } else if (r[12] === '') {
        return 'DELETE /org/:org/tasks/:task/tags';
      } else if (r[14] === '') {
        return 'DELETE /org/:org/tasks/:task/fields/:field';
      } else if (r[16] === '') {
        return 'DELETE /org/:org/billing/payment-methods/:method';
      } else if (r[18] === '') {
        return 'DELETE /org/:org/api-keys/:key';
      } else if (r[20] === '') {
        return 'DELETE /org/:org/webhooks/:hook';
      } else if (r[22] === '') {
        return 'DELETE /files/:file+';
      } else if (r[24] === '') {
        return 'DELETE /search/filters/:filter';
      } else if (r[26] === '') {
        return 'DELETE /tags/:tag';
      }
    }
  } else if (m === 'PUT') {
    let r =
      /^(?:\/org\/(?<org>[^/]+)\/(?:projects\/(?<project>[^/]+)\/tasks\/fields\/(?<field>[^/]+)()$|tasks\/(?<task>[^/]+)\/fields\/(?<field>[^/]+)()$)|$.)/.exec(
        p,
      );
    if (r !== null) {
      if (r[4] === '') {
        return 'PUT /org/:org/projects/:project/tasks/fields/:field';
      } else if (r[7] === '') {
        return 'PUT /org/:org/tasks/:task/fields/:field';
      }
    }
  }
  return '';
};
