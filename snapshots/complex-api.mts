export default (method: string, path: string) => {
  let isHead = false;
  switch (method) {
    case "HEAD": {
      isHead = true;
    }
    case "GET":
      switch (path) {
        case "/auth/sso/providers":
          {
            return isHead ? "" : "GET /auth/sso/providers";
          }
          break;
        case "/user/me":
          {
            return isHead ? "" : "GET /user/me";
          }
          break;
        case "/user/me/preferences":
          {
            return isHead ? "" : "GET /user/me/preferences";
          }
          break;
        case "/user/me/sessions":
          {
            return isHead ? "" : "GET /user/me/sessions";
          }
          break;
        case "/user/notifications":
          {
            return isHead ? "" : "GET /user/notifications";
          }
          break;
        case "/status":
          {
            return isHead ? "" : "GET /status";
          }
          break;
      }
      {
        let match =
          /^\/(?:user\/(?<user>[^/]+)(?:\/(?:notifications()|invites\/(?<invite>[^/]+)())|())|org\/(?<org>[^/]+)(?:\/(?:members()|roles()|domains()|projects\/(?<project>[^/]+)(?:\/(?:members()|activity()|tasks(?:()|\/(?:time-entries()|attachments())))|())|tasks(?:()|\/(?<task>[^/]+)(?:\/comments()|()))|billing\/(?:p(?:lans()|ayment-methods())|subscription()|invoices(?:()|\/(?<invoice>[^/]+)()))|api-keys()|webhooks())|())|files\/(?<file>.+)())$/.exec(
            path,
          );
        if (match !== null) {
          if (match[2] === "") {
            return isHead ? "" : "GET /user/:user/notifications";
          } else if (match[4] === "") {
            return isHead ? "" : "GET /user/:user/invites/:invite";
          } else if (match[5] === "") {
            return isHead ? "" : "GET /user/:user";
          } else if (match[7] === "") {
            return isHead ? "" : "GET /org/:org/members";
          } else if (match[8] === "") {
            return isHead ? "" : "GET /org/:org/roles";
          } else if (match[9] === "") {
            return isHead ? "" : "GET /org/:org/domains";
          } else if (match[11] === "") {
            return isHead ? "" : "GET /org/:org/projects/:project/members";
          } else if (match[12] === "") {
            return isHead ? "" : "GET /org/:org/projects/:project/activity";
          } else if (match[13] === "") {
            return isHead ? "" : "GET /org/:org/projects/:project/tasks";
          } else if (match[14] === "") {
            return isHead ? "" : "GET /org/:org/projects/:project/tasks/time-entries";
          } else if (match[15] === "") {
            return isHead ? "" : "GET /org/:org/projects/:project/tasks/attachments";
          } else if (match[16] === "") {
            return isHead ? "" : "GET /org/:org/projects/:project";
          } else if (match[17] === "") {
            return isHead ? "" : "GET /org/:org/tasks";
          } else if (match[19] === "") {
            return isHead ? "" : "GET /org/:org/tasks/:task/comments";
          } else if (match[20] === "") {
            return isHead ? "" : "GET /org/:org/tasks/:task";
          } else if (match[21] === "") {
            return isHead ? "" : "GET /org/:org/billing/plans";
          } else if (match[22] === "") {
            return isHead ? "" : "GET /org/:org/billing/payment-methods";
          } else if (match[23] === "") {
            return isHead ? "" : "GET /org/:org/billing/subscription";
          } else if (match[24] === "") {
            return isHead ? "" : "GET /org/:org/billing/invoices";
          } else if (match[26] === "") {
            return isHead ? "" : "GET /org/:org/billing/invoices/:invoice";
          } else if (match[27] === "") {
            return isHead ? "" : "GET /org/:org/api-keys";
          } else if (match[28] === "") {
            return isHead ? "" : "GET /org/:org/webhooks";
          } else if (match[29] === "") {
            return isHead ? "" : "GET /org/:org";
          } else if (match[31] === "") {
            return isHead ? "" : "GET /files/:file+";
          }
        }
      }
      break;
    case "POST":
      switch (path) {
        case "/auth/register":
          {
            return "POST /auth/register";
          }
          break;
        case "/auth/login":
          {
            return "POST /auth/login";
          }
          break;
        case "/auth/logout":
          {
            return "POST /auth/logout";
          }
          break;
        case "/auth/refresh":
          {
            return "POST /auth/refresh";
          }
          break;
        case "/auth/password/forgot":
          {
            return "POST /auth/password/forgot";
          }
          break;
        case "/auth/password/reset":
          {
            return "POST /auth/password/reset";
          }
          break;
        case "/auth/sso":
          {
            return "POST /auth/sso";
          }
          break;
        case "/user":
          {
            return "POST /user";
          }
          break;
        case "/user/me":
          {
            return "POST /user/me";
          }
          break;
        case "/org":
          {
            return "POST /org";
          }
          break;
        case "/files/upload":
          {
            return "POST /files/upload";
          }
          break;
      }
      {
        let match =
          /^\/(?:user(?:\/notifications\/read(?:\/(?<notification>[^/]+))?()|\/(?<user>[^/]+)(?:\/invites(?:()|\/(?<invite>[^/]+)\/(?:accept()|resend()))|()))|org\/(?<org>[^/]+)\/(?:members(?:()|\/(?<member>[^/]+)())|roles(?:()|\/(?<role>[^/]+)())|domains(?:()|\/(?<domain>[^/]+)())|projects(?:()|\/(?<project>[^/]+)\/(?:members()|tasks(?:()|\/(?:t(?:ime-entries()|ags())|attachments()))))|tasks\/(?<task>[^/]+)\/(?:assign()|status()|comments())|billing\/(?:subscription(?:()|\/cancel())|invoices\/(?<invoice>[^/]+)()|payment-methods())|api-keys()|webhooks()))$/.exec(
            path,
          );
        if (match !== null) {
          if (match[2] === "") {
            return "POST /user/notifications/read/:notification?";
          } else if (match[4] === "") {
            return "POST /user/:user/invites";
          } else if (match[6] === "") {
            return "POST /user/:user/invites/:invite/accept";
          } else if (match[7] === "") {
            return "POST /user/:user/invites/:invite/resend";
          } else if (match[8] === "") {
            return "POST /user/:user";
          } else if (match[10] === "") {
            return "POST /org/:org/members";
          } else if (match[12] === "") {
            return "POST /org/:org/members/:member";
          } else if (match[13] === "") {
            return "POST /org/:org/roles";
          } else if (match[15] === "") {
            return "POST /org/:org/roles/:role";
          } else if (match[16] === "") {
            return "POST /org/:org/domains";
          } else if (match[18] === "") {
            return "POST /org/:org/domains/:domain";
          } else if (match[19] === "") {
            return "POST /org/:org/projects";
          } else if (match[21] === "") {
            return "POST /org/:org/projects/:project/members";
          } else if (match[22] === "") {
            return "POST /org/:org/projects/:project/tasks";
          } else if (match[23] === "") {
            return "POST /org/:org/projects/:project/tasks/time-entries";
          } else if (match[24] === "") {
            return "POST /org/:org/projects/:project/tasks/tags";
          } else if (match[25] === "") {
            return "POST /org/:org/projects/:project/tasks/attachments";
          } else if (match[27] === "") {
            return "POST /org/:org/tasks/:task/assign";
          } else if (match[28] === "") {
            return "POST /org/:org/tasks/:task/status";
          } else if (match[29] === "") {
            return "POST /org/:org/tasks/:task/comments";
          } else if (match[30] === "") {
            return "POST /org/:org/billing/subscription";
          } else if (match[31] === "") {
            return "POST /org/:org/billing/subscription/cancel";
          } else if (match[33] === "") {
            return "POST /org/:org/billing/invoices/:invoice";
          } else if (match[34] === "") {
            return "POST /org/:org/billing/payment-methods";
          } else if (match[35] === "") {
            return "POST /org/:org/api-keys";
          } else if (match[36] === "") {
            return "POST /org/:org/webhooks";
          }
        }
      }
      break;
    case "PATCH":
      switch (path) {
        case "/user/me/preferences":
          {
            return "PATCH /user/me/preferences";
          }
          break;
      }
      {
        let match =
          /^\/org\/(?<org>[^/]+)(?:\/(?:projects\/(?<project>[^/]+)()|tasks\/(?<task>[^/]+)()|webhooks\/(?<hook>[^/]+)())|())$/.exec(
            path,
          );
        if (match !== null) {
          if (match[3] === "") {
            return "PATCH /org/:org/projects/:project";
          } else if (match[5] === "") {
            return "PATCH /org/:org/tasks/:task";
          } else if (match[7] === "") {
            return "PATCH /org/:org/webhooks/:hook";
          } else if (match[8] === "") {
            return "PATCH /org/:org";
          }
        }
      }
      break;
    case "DELETE":
      {
        let match =
          /^\/(?:user\/me\/sessions\/(?<session>[^/]+)()|org\/(?<org>[^/]+)(?:\/(?:projects\/(?<project>[^/]+)(?:\/tasks\/(?:t(?:ime-entries\/(?<entry>[^/]+)()|ags())|fields\/(?<field>[^/]+)())|())|tasks\/(?<task>[^/]+)()|billing\/payment-methods\/(?<method>[^/]+)()|api-keys\/(?<key>[^/]+)()|webhooks\/(?<hook>[^/]+)())|())|files\/(?<file>.+)())$/.exec(
            path,
          );
        if (match !== null) {
          if (match[2] === "") {
            return "DELETE /user/me/sessions/:session";
          } else if (match[6] === "") {
            return "DELETE /org/:org/projects/:project/tasks/time-entries/:entry";
          } else if (match[7] === "") {
            return "DELETE /org/:org/projects/:project/tasks/tags";
          } else if (match[9] === "") {
            return "DELETE /org/:org/projects/:project/tasks/fields/:field";
          } else if (match[10] === "") {
            return "DELETE /org/:org/projects/:project";
          } else if (match[12] === "") {
            return "DELETE /org/:org/tasks/:task";
          } else if (match[14] === "") {
            return "DELETE /org/:org/billing/payment-methods/:method";
          } else if (match[16] === "") {
            return "DELETE /org/:org/api-keys/:key";
          } else if (match[18] === "") {
            return "DELETE /org/:org/webhooks/:hook";
          } else if (match[19] === "") {
            return "DELETE /org/:org";
          } else if (match[21] === "") {
            return "DELETE /files/:file+";
          }
        }
      }
      break;
    case "PUT":
      {
        let match =
          /^\/org\/(?<org>[^/]+)\/(?:projects\/(?<project>[^/]+)\/tasks\/fields\/(?<field>[^/]+)()|billing\/payment-methods\/(?<method>[^/]+)())$/.exec(
            path,
          );
        if (match !== null) {
          if (match[4] === "") {
            return "PUT /org/:org/projects/:project/tasks/fields/:field";
          } else if (match[6] === "") {
            return "PUT /org/:org/billing/payment-methods/:method";
          }
        }
      }
      break;
  }
  {
    return " *";
  }
};
