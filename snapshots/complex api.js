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
    {
      let r =
        /^\/(?:\x6frg\/(?<org>[^/]+)\/(?:\x72oles(?:()|\/(?<role>[^/]+)())|\x6dembers(?:()|\/(?<member>[^/]+)())|\x64omains(?:()|\/(?<domain>[^/]+)())|\x70rojects(?:()|\/(?<project>[^/]+)\/(?:\x74asks(?:()|\/(?:\x61ttachments()|\x74(?:\x61gs()|\x69me\x2dentries(?:()|\/(?<entry>[^/]+)()))))|\x6dembers()))|\x74asks\/(?<task>[^/]+)\/(?:\x73tatus()|\x61(?:\x74tachments()|\x73sign())|\x63omments()|\x74(?:\x61gs()|\x69me\x2dentries(?:()|\/(?<entry>[^/]+)\/stop())))|\x62illing\/(?:\x69nvoices\/(?<invoice>[^/]+)()|\x73ubscription(?:()|\/cancel())|\x70ayment\x2dmethods())|\x61pi\x2dkeys()|\x77ebhooks())|\x75ser(?:\/notifications\/(?<notification>[^/]+)\/read()|\/(?<user>[^/]+)(?:()|\/invites(?:()|\/(?<invite>[^/]+)\/(?:\x72esend()|\x61ccept())))))$/.exec(
          p,
        );
      if (r !== null) {
        if (r[2] === '') {
          return 'POST /org/:org/roles';
        } else if (r[4] === '') {
          return 'POST /org/:org/roles/:role';
        } else if (r[5] === '') {
          return 'POST /org/:org/members';
        } else if (r[7] === '') {
          return 'POST /org/:org/members/:member';
        } else if (r[8] === '') {
          return 'POST /org/:org/domains';
        } else if (r[10] === '') {
          return 'POST /org/:org/domains/:domain';
        } else if (r[11] === '') {
          return 'POST /org/:org/projects';
        } else if (r[13] === '') {
          return 'POST /org/:org/projects/:project/tasks';
        } else if (r[14] === '') {
          return 'POST /org/:org/projects/:project/tasks/attachments';
        } else if (r[15] === '') {
          return 'POST /org/:org/projects/:project/tasks/tags';
        } else if (r[16] === '') {
          return 'POST /org/:org/projects/:project/tasks/time-entries';
        } else if (r[18] === '') {
          return 'POST /org/:org/projects/:project/tasks/time-entries/:entry';
        } else if (r[19] === '') {
          return 'POST /org/:org/projects/:project/members';
        } else if (r[21] === '') {
          return 'POST /org/:org/tasks/:task/status';
        } else if (r[22] === '') {
          return 'POST /org/:org/tasks/:task/attachments';
        } else if (r[23] === '') {
          return 'POST /org/:org/tasks/:task/assign';
        } else if (r[24] === '') {
          return 'POST /org/:org/tasks/:task/comments';
        } else if (r[25] === '') {
          return 'POST /org/:org/tasks/:task/tags';
        } else if (r[26] === '') {
          return 'POST /org/:org/tasks/:task/time-entries';
        } else if (r[28] === '') {
          return 'POST /org/:org/tasks/:task/time-entries/:entry/stop';
        } else if (r[30] === '') {
          return 'POST /org/:org/billing/invoices/:invoice';
        } else if (r[31] === '') {
          return 'POST /org/:org/billing/subscription';
        } else if (r[32] === '') {
          return 'POST /org/:org/billing/subscription/cancel';
        } else if (r[33] === '') {
          return 'POST /org/:org/billing/payment-methods';
        } else if (r[34] === '') {
          return 'POST /org/:org/api-keys';
        } else if (r[35] === '') {
          return 'POST /org/:org/webhooks';
        } else if (r[37] === '') {
          return 'POST /user/notifications/:notification/read';
        } else if (r[39] === '') {
          return 'POST /user/:user';
        } else if (r[40] === '') {
          return 'POST /user/:user/invites';
        } else if (r[42] === '') {
          return 'POST /user/:user/invites/:invite/resend';
        } else if (r[43] === '') {
          return 'POST /user/:user/invites/:invite/accept';
        }
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
    {
      let r =
        /^\/(?:\x6frg\/(?<org>[^/]+)(?:()|\/(?:\x72oles()|\x6dembers()|\x64omains()|\x70rojects\/(?<project>[^/]+)(?:()|\/(?:\x61ctivity()|\x6dembers()|\x74asks(?:()|\/(?:\x61ttachments()|\x74ime\x2dentries()))))|\x74asks(?:()|\/(?<task>[^/]+)(?:()|\/(?:\x74ime\x2dentries()|\x63omments()|\x61ttachments())))|\x62illing\/(?:\x73ubscription()|\x70(?:\x61yment\x2dmethods()|\x6cans())|\x69nvoices(?:()|\/(?<invoice>[^/]+)()))|\x61pi\x2dkeys()|\x77ebhooks(?:()|\/(?<hook>[^/]+)\/deliveries(?:()|\/(?<delivery>[^/]+)()))))|\x75ser\/(?<user>[^/]+)(?:()|\/(?:\x69nvites\/(?<invite>[^/]+)()|\x6eotifications()))|\x66iles\/(?<file>.+)()|\x61dmin\/reports\/(?:\x75sers\/(?<user>[^/]+)\/activity()|\x70rojects\/(?<project>[^/]+)\/summary()))$/.exec(
          p,
        );
      if (r !== null) {
        if (r[2] === '') {
          return 'GET /org/:org';
        } else if (r[3] === '') {
          return 'GET /org/:org/roles';
        } else if (r[4] === '') {
          return 'GET /org/:org/members';
        } else if (r[5] === '') {
          return 'GET /org/:org/domains';
        } else if (r[7] === '') {
          return 'GET /org/:org/projects/:project';
        } else if (r[8] === '') {
          return 'GET /org/:org/projects/:project/activity';
        } else if (r[9] === '') {
          return 'GET /org/:org/projects/:project/members';
        } else if (r[10] === '') {
          return 'GET /org/:org/projects/:project/tasks';
        } else if (r[11] === '') {
          return 'GET /org/:org/projects/:project/tasks/attachments';
        } else if (r[12] === '') {
          return 'GET /org/:org/projects/:project/tasks/time-entries';
        } else if (r[13] === '') {
          return 'GET /org/:org/tasks';
        } else if (r[15] === '') {
          return 'GET /org/:org/tasks/:task';
        } else if (r[16] === '') {
          return 'GET /org/:org/tasks/:task/time-entries';
        } else if (r[17] === '') {
          return 'GET /org/:org/tasks/:task/comments';
        } else if (r[18] === '') {
          return 'GET /org/:org/tasks/:task/attachments';
        } else if (r[19] === '') {
          return 'GET /org/:org/billing/subscription';
        } else if (r[20] === '') {
          return 'GET /org/:org/billing/payment-methods';
        } else if (r[21] === '') {
          return 'GET /org/:org/billing/plans';
        } else if (r[22] === '') {
          return 'GET /org/:org/billing/invoices';
        } else if (r[24] === '') {
          return 'GET /org/:org/billing/invoices/:invoice';
        } else if (r[25] === '') {
          return 'GET /org/:org/api-keys';
        } else if (r[26] === '') {
          return 'GET /org/:org/webhooks';
        } else if (r[28] === '') {
          return 'GET /org/:org/webhooks/:hook/deliveries';
        } else if (r[30] === '') {
          return 'GET /org/:org/webhooks/:hook/deliveries/:delivery';
        } else if (r[32] === '') {
          return 'GET /user/:user';
        } else if (r[34] === '') {
          return 'GET /user/:user/invites/:invite';
        } else if (r[35] === '') {
          return 'GET /user/:user/notifications';
        } else if (r[37] === '') {
          return 'GET /files/:file+';
        } else if (r[39] === '') {
          return 'GET /admin/reports/users/:user/activity';
        } else if (r[41] === '') {
          return 'GET /admin/reports/projects/:project/summary';
        }
      }
    }
  } else if (m === 'PATCH') {
    if (p === '/user/me/preferences') {
      return 'PATCH /user/me/preferences';
    }
    {
      let r =
        /^\/(?:\x73earch\/filters\/(?<filter>[^/]+)()|\x6frg\/(?<org>[^/]+)(?:()|\/(?:\x74asks\/(?<task>[^/]+)()|\x70rojects\/(?<project>[^/]+)()|\x77ebhooks\/(?<hook>[^/]+)()))|\x74ags\/(?<tag>[^/]+)())$/.exec(
          p,
        );
      if (r !== null) {
        if (r[2] === '') {
          return 'PATCH /search/filters/:filter';
        } else if (r[4] === '') {
          return 'PATCH /org/:org';
        } else if (r[6] === '') {
          return 'PATCH /org/:org/tasks/:task';
        } else if (r[8] === '') {
          return 'PATCH /org/:org/projects/:project';
        } else if (r[10] === '') {
          return 'PATCH /org/:org/webhooks/:hook';
        } else if (r[12] === '') {
          return 'PATCH /tags/:tag';
        }
      }
    }
  } else if (m === 'DELETE') {
    {
      let r =
        /^\/(?:\x6frg\/(?<org>[^/]+)(?:()|\/(?:\x74asks\/(?<task>[^/]+)(?:()|\/(?:\x66ields\/(?<field>[^/]+)()|\x74ags()))|\x70rojects\/(?<project>[^/]+)(?:()|\/tasks\/(?:\x66ields\/(?<field>[^/]+)()|\x74ags()))|\x62illing\/payment\x2dmethods\/(?<method>[^/]+)()|\x61pi\x2dkeys\/(?<key>[^/]+)()|\x77ebhooks\/(?<hook>[^/]+)()))|\x75ser\/me\/sessions\/(?<session>[^/]+)()|\x66iles\/(?<file>.+)()|\x73earch\/filters\/(?<filter>[^/]+)()|\x74ags\/(?<tag>[^/]+)())$/.exec(
          p,
        );
      if (r !== null) {
        if (r[2] === '') {
          return 'DELETE /org/:org';
        } else if (r[4] === '') {
          return 'DELETE /org/:org/tasks/:task';
        } else if (r[6] === '') {
          return 'DELETE /org/:org/tasks/:task/fields/:field';
        } else if (r[7] === '') {
          return 'DELETE /org/:org/tasks/:task/tags';
        } else if (r[9] === '') {
          return 'DELETE /org/:org/projects/:project';
        } else if (r[11] === '') {
          return 'DELETE /org/:org/projects/:project/tasks/fields/:field';
        } else if (r[12] === '') {
          return 'DELETE /org/:org/projects/:project/tasks/tags';
        } else if (r[14] === '') {
          return 'DELETE /org/:org/billing/payment-methods/:method';
        } else if (r[16] === '') {
          return 'DELETE /org/:org/api-keys/:key';
        } else if (r[18] === '') {
          return 'DELETE /org/:org/webhooks/:hook';
        } else if (r[20] === '') {
          return 'DELETE /user/me/sessions/:session';
        } else if (r[22] === '') {
          return 'DELETE /files/:file+';
        } else if (r[24] === '') {
          return 'DELETE /search/filters/:filter';
        } else if (r[26] === '') {
          return 'DELETE /tags/:tag';
        }
      }
    }
  } else if (m === 'PUT') {
    {
      let r =
        /^\/org\/(?<org>[^/]+)\/(?:\x74asks\/(?<task>[^/]+)\/fields\/(?<field>[^/]+)()|\x70rojects\/(?<project>[^/]+)\/tasks\/fields\/(?<field>[^/]+)())$/.exec(
          p,
        );
      if (r !== null) {
        if (r[4] === '') {
          return 'PUT /org/:org/tasks/:task/fields/:field';
        } else if (r[7] === '') {
          return 'PUT /org/:org/projects/:project/tasks/fields/:field';
        }
      }
    }
  }
  return '';
};
