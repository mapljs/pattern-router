(m, p) => {
  switch (m) {
    case 'HEAD': {
    }
    case 'GET': {
      switch (p) {
        case '/auth/sso/providers': {
          return 'GET /auth/sso/providers';
          break;
        }
        case '/user/me': {
          return 'GET /user/me';
          break;
        }
        case '/user/me/preferences': {
          return 'GET /user/me/preferences';
          break;
        }
        case '/user/me/sessions': {
          return 'GET /user/me/sessions';
          break;
        }
        case '/user/notifications': {
          return 'GET /user/notifications';
          break;
        }
        case '/search': {
          return 'GET /search';
          break;
        }
        case '/search/filters': {
          return 'GET /search/filters';
          break;
        }
        case '/tags': {
          return 'GET /tags';
          break;
        }
        case '/status': {
          return 'GET /status';
          break;
        }
        case '/admin/reports/time': {
          return 'GET /admin/reports/time';
          break;
        }
        case '/admin/users': {
          return 'GET /admin/users';
          break;
        }
        case '/admin/projects': {
          return 'GET /admin/projects';
          break;
        }
        case '/admin/audit-logs': {
          return 'GET /admin/audit-logs';
          break;
        }
        case '/admin/stats': {
          return 'GET /admin/stats';
          break;
        }
      }
      let r =
        /^\/(?:user\/(?<user>[^/]+)(?:()|\/(?:notifications()|invites\/(?<invite>[^/]+)()))|org\/(?<org>[^/]+)(?:()|\/(?:members()|roles()|domains()|projects\/(?<project>[^/]+)(?:()|\/(?:members()|activity()|tasks(?:()|\/(?:time-entries()|attachments()))))|tasks(?:()|\/(?<task>[^/]+)(?:()|\/(?:comments()|time-entries()|attachments())))|billing\/(?:p(?:lans()|ayment-methods())|subscription()|invoices(?:()|\/(?<invoice>[^/]+)()))|api-keys()|webhooks(?:()|\/(?<hook>[^/]+)\/deliveries(?:()|\/(?<delivery>[^/]+)()))))|files\/(?<file>.+)()|admin\/reports\/(?:projects\/(?<project>[^/]+)\/summary()|users\/(?<user>[^/]+)\/activity()))$/.exec(
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
      break;
    }
    case 'POST': {
      switch (p) {
        case '/auth/register': {
          return 'POST /auth/register';
          break;
        }
        case '/auth/login': {
          return 'POST /auth/login';
          break;
        }
        case '/auth/logout': {
          return 'POST /auth/logout';
          break;
        }
        case '/auth/refresh': {
          return 'POST /auth/refresh';
          break;
        }
        case '/auth/password/forgot': {
          return 'POST /auth/password/forgot';
          break;
        }
        case '/auth/password/reset': {
          return 'POST /auth/password/reset';
          break;
        }
        case '/auth/sso': {
          return 'POST /auth/sso';
          break;
        }
        case '/user': {
          return 'POST /user';
          break;
        }
        case '/user/me': {
          return 'POST /user/me';
          break;
        }
        case '/user/notifications/read-all': {
          return 'POST /user/notifications/read-all';
          break;
        }
        case '/org': {
          return 'POST /org';
          break;
        }
        case '/files/upload': {
          return 'POST /files/upload';
          break;
        }
        case '/search/filters': {
          return 'POST /search/filters';
          break;
        }
        case '/tags': {
          return 'POST /tags';
          break;
        }
        case '/admin/impersonate': {
          return 'POST /admin/impersonate';
          break;
        }
      }
      let r =
        /^\/(?:user(?:\/notifications\/(?<notification>[^/]+)\/read()|\/(?<user>[^/]+)(?:()|\/invites(?:()|\/(?<invite>[^/]+)\/(?:accept()|resend()))))|org\/(?<org>[^/]+)\/(?:members(?:()|\/(?<member>[^/]+)())|roles(?:()|\/(?<role>[^/]+)())|domains(?:()|\/(?<domain>[^/]+)())|projects(?:()|\/(?<project>[^/]+)\/(?:members()|tasks(?:()|\/(?:t(?:ime-entries(?:()|\/(?<entry>[^/]+)())|ags())|attachments()))))|tasks\/(?<task>[^/]+)\/(?:a(?:ssign()|ttachments())|status()|comments()|t(?:ime-entries(?:()|\/(?<entry>[^/]+)\/stop())|ags()))|billing\/(?:subscription(?:()|\/cancel())|invoices\/(?<invoice>[^/]+)()|payment-methods())|api-keys()|webhooks()))$/.exec(
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
      break;
    }
    case 'PATCH': {
      switch (p) {
        case '/user/me/preferences': {
          return 'PATCH /user/me/preferences';
          break;
        }
      }
      let r =
        /^\/(?:org\/(?<org>[^/]+)(?:()|\/(?:projects\/(?<project>[^/]+)()|tasks\/(?<task>[^/]+)()|webhooks\/(?<hook>[^/]+)()))|search\/filters\/(?<filter>[^/]+)()|tags\/(?<tag>[^/]+)())$/.exec(
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
      break;
    }
    case 'DELETE': {
      let r =
        /^\/(?:user\/me\/sessions\/(?<session>[^/]+)()|org\/(?<org>[^/]+)(?:()|\/(?:projects\/(?<project>[^/]+)(?:()|\/tasks\/(?:tags()|fields\/(?<field>[^/]+)()))|tasks\/(?<task>[^/]+)(?:()|\/(?:tags()|fields\/(?<field>[^/]+)()))|billing\/payment-methods\/(?<method>[^/]+)()|api-keys\/(?<key>[^/]+)()|webhooks\/(?<hook>[^/]+)()))|files\/(?<file>.+)()|search\/filters\/(?<filter>[^/]+)()|tags\/(?<tag>[^/]+)())$/.exec(
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
      break;
    }
    case 'PUT': {
      let r =
        /^\/org\/(?<org>[^/]+)\/(?:projects\/(?<project>[^/]+)\/tasks\/fields\/(?<field>[^/]+)()|tasks\/(?<task>[^/]+)\/fields\/(?<field>[^/]+)())$/.exec(
          p,
        );
      if (r !== null) {
        if (r[4] === '') {
          return 'PUT /org/:org/projects/:project/tasks/fields/:field';
        } else if (r[7] === '') {
          return 'PUT /org/:org/tasks/:task/fields/:field';
        }
      }
      break;
    }
  }
  return '';
};
