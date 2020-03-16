define({ "api": [
  {
    "type": "post",
    "url": "/api/v1/wx/admin/jobFair/job/audit.do",
    "title": "审核招聘会职位",
    "name": "jobFair_job_audit",
    "group": "GroupAdminJobFairJob",
    "permission": [
      {
        "name": "token"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "array",
            "optional": false,
            "field": "id_jobs_array",
            "description": "<p>选择的简历</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "audit",
            "description": "<p>审核状态====审核通过1 未通过3</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "pms_notice",
            "description": "<p>发站内信1发</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "remark",
            "description": "<p>备注</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求示例:",
          "content": "{\n        \"id_jobs_array\":[211],\n        \"audit\":\"1\",\n        \"pms_notice\":\"1\",\n        \"remark\":\"java FX PP\"\n        }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>[msg=&gt;&quot;审核成功!&quot;]</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>[msg=&gt;&quot;审核失败!&quot;]</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "200:",
          "content": "{\n        \"status\": 0,\n        \"msg\": \"审核失败!\"\n        }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/home/ymh/www/aix-system/app/Http/Controllers/Api/V1/WX/Admin/JobFairController.php",
    "groupTitle": "管理员招聘会职位"
  },
  {
    "type": "get",
    "url": "/api/v1/wx/admin/jobFair/job/select.do",
    "title": "所有招聘会职位",
    "name": "job_select",
    "group": "GroupAdminJobFairJob",
    "permission": [
      {
        "name": "token"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>&quot;&quot;</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "/home/ymh/www/aix-system/app/Http/Controllers/Api/V1/WX/Admin/JobFairController.php",
    "groupTitle": "管理员招聘会职位"
  },
  {
    "type": "post",
    "url": "/api/v1/wx/public/jobFairCompanyJoinPosition",
    "title": "预定招聘会职位",
    "name": "public_jobFairCompanyJoinPosition",
    "group": "GroupAdminJobFair",
    "permission": [
      {
        "name": "token"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "jobfair_id",
            "description": "<p>招聘会ID</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "company_id",
            "description": "<p>企业ID</p>"
          },
          {
            "group": "Parameter",
            "type": "array",
            "optional": false,
            "field": "position_id",
            "description": "<p>展位ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求示例:",
          "content": "{\n\"jobfair_id\":153,\n\"company_id\":457,\n\"position_id\":[6972,6973]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "预定成功200:",
          "content": "{\n\"status\": 200,\n\"msg\": \"success\",\n\"data\": {\n\"result\": \"预定成功\",\n\"joinSuccessPositionIDS\": [\n6972,\n6973\n]\n}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "预定失败200:",
          "content": "{\n\"status\": 200,\n\"msg\": \"预定失败\"\n\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/home/ymh/www/aix-system/app/Http/Controllers/Api/V1/WX/Admin/JobFairController.php",
    "groupTitle": "管理员招聘会"
  },
  {
    "type": "get",
    "url": "/api/v1/wx/public/jobFairFloorPlanStands?jobfair_id=152&company_id=457",
    "title": "查看某个招聘会的所有展位和我参加的展位",
    "name": "public_jobFairFloorPlanStands",
    "group": "GroupAdminJobFair",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "jobfair_id",
            "description": "<p>招聘会ID</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "company_id",
            "description": "<p>企业ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "200:",
          "content": "\"JobFairFloorPlanStandResult\": [  //此招聘会所有的展位置\n{\n\"id\": 6949,//展位id\n\"name\": \"A1\" //展位名称\n},\n],\n\"joined\": [\n{\n\"id\": 616,\n\"position_id\": 6970,//展位id\n\"position\": \"22\"//展位名称\n}\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/home/ymh/www/aix-system/app/Http/Controllers/Api/V1/WX/Admin/JobFairController.php",
    "groupTitle": "管理员招聘会"
  },
  {
    "type": "get",
    "url": "/api/v1/wx/admin/jobFair/signed/select.do",
    "title": "招聘会签到数据",
    "name": "signed_select",
    "group": "GroupAdminJobFair",
    "permission": [
      {
        "name": "token"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>招聘会ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "position_id",
            "description": "<p>展位号</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "type",
            "description": "<p>签到类型(0:未签到,1:迟到,2:早退,3:迟到/早退,4:已签到)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "数据说明(正常分页):",
          "content": "\n{\n\"type\": \"签到类型(0:未签到,1:迟到,2:早退,3:迟到/早退,4:已签到)\",\n\"companys\":\"公司信息\",\n \"jobfair\":\"招聘会信息\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/home/ymh/www/aix-system/app/Http/Controllers/Api/V1/WX/Admin/JobFairController.php",
    "groupTitle": "管理员招聘会"
  },
  {
    "type": "post",
    "url": "/api/v1/wx/admin/resume/audit.do",
    "title": "审核简历",
    "name": "admin_resume_audit",
    "group": "GroupAdminResume",
    "permission": [
      {
        "name": "token"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "id_resume_array",
            "description": "<p>简历数组</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "audit",
            "description": "<p>审核状态 (0 审核不通过  2 通过)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "remark",
            "description": "<p>备注</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pms_notice",
            "description": "<p>是否发送站内信 1 发</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求示例:",
          "content": "{\n\"id_resume_array\":[75,338,127,88],\n\"audit\":\"2\",\n\"pms_notice\":\"1\",\n\"remark\":\"88 路有人售票巴士开往定坊工业园\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>审核成功</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>审核失败</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "/home/ymh/www/aix-system/app/Http/Controllers/Api/V1/WX/Admin/ResumeController.php",
    "groupTitle": "管理员简历"
  },
  {
    "type": "get",
    "url": "/api/v1/wx/admin/resume/select.do",
    "title": "查询所有的简历",
    "name": "admin_resume_select",
    "group": "GroupAdminResume",
    "permission": [
      {
        "name": "token"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>[token=&gt;&quot; &quot;]</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "/home/ymh/www/aix-system/app/Http/Controllers/Api/V1/WX/Admin/ResumeController.php",
    "groupTitle": "管理员简历"
  },
  {
    "type": "get",
    "url": "/api/v1/wx/admin/resume/show.do?id=727",
    "title": "管理员查看个人简历",
    "name": "admin_resume_show",
    "group": "GroupAdminResume",
    "permission": [
      {
        "name": "token"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>简历ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功示例:",
          "content": "      {\n\"status\": 200,\n        \"msg\": \"success\"\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/home/ymh/www/aix-system/app/Http/Controllers/Api/V1/WX/Company/ResumeController.php",
    "groupTitle": "管理员简历"
  },
  {
    "type": "post",
    "url": "/api/v1/wx/admin/login.do",
    "title": "登陆",
    "name": "admin_login",
    "group": "GroupAdmin",
    "permission": [
      {
        "name": "token"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求示例:",
          "content": "{\n\"id\": 4711\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>[token=&gt;&quot; &quot;]</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>用户名密码错误暂无改用户</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "203:",
          "content": "{\n\"error\": \"UserNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/home/ymh/www/aix-system/app/Http/Controllers/Api/V1/WX/Admin/AdminController.php",
    "groupTitle": "管理员"
  },
  {
    "type": "post",
    "url": "/api/v1/wx/public/mobileRegisterOrLoginNoPwd",
    "title": "手机号注册或则登录",
    "name": "mobile_login_register",
    "group": "GroupAuth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mobile",
            "description": "<p>手机号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mobile_vcode",
            "description": "<p>手机验证码(6位)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "reg_type",
            "description": "<p>固定参数带4</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求示例:",
          "content": "{\n        \"mobile\":\"18812341234\",\n        \"mobile_vcode\":\"123123\",\n        \"reg_type\":4\n        }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "短信验证码错误:",
          "content": "{\n\"status\": 0,\n\"msg\": \"短信验证码不通过,请重新输入\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "请求成功(如果手机号没有注册自动注册,注册过自动登陆):",
          "content": "{\n\"status\": 200,\n\"msg\": \"success\",\n\"data\": {\n\"register\": true,  是否注册过(true注册过,false未注册)\n\"token\": \"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8venAudG9wOjUyMDAvYXBpL3YxL3d4L3B1YmxpYy9tb2JpbGVSZWdpc3Rlck9yTG9naW5Ob1B3ZCIsImlhdCI6MTU4MjUyMjA0NiwiZXhwIjoxNTgyNTI5MjQ2LCJuYmYiOjE1ODI1MjIwNDYsImp0aSI6ImlEUzhpRkNFWHhndGkyVUsiLCJzdWIiOjUyMCwicHJ2IjoiODY2NWFlOTc3NWNmMjZmNmI4ZTQ5NmY4NmZhNTM2ZDY4ZGQ3MTgxOCJ9.p9CBee2W69X12ypjd_qAEKKePhYPGV29tkXrWBSwzpI\"\n}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/home/ymh/www/aix-system/app/Http/Controllers/Api/V1/Auth/LoginController.php",
    "groupTitle": "授权"
  },
  {
    "type": "post",
    "url": "/api/v1/wx/public/mobileSendLoginSMS",
    "title": "发送免密登陆注册手机验证码",
    "name": "mobile_send_sms",
    "group": "GroupAuth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mobile",
            "description": "<p>手机号</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求示例:",
          "content": "{\n    \"mobile\": \"18812341234\"\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "发送过快:",
          "content": "{\n\"status\": 0,\n\"msg\": \"请稍后再发送短信\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "请求成功(默认的验证码为123456):",
          "content": "{\n\"status\": 200,\n\"msg\": \"发送成功!\",\n\"data\": \"发送成功!\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/home/ymh/www/aix-system/app/Http/Controllers/Api/V1/Auth/LoginController.php",
    "groupTitle": "授权"
  },
  {
    "type": "POST",
    "url": "/api/v1/wx/company/login",
    "title": "企业登录",
    "name": "Company_login",
    "group": "GroupCompany",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "account",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "登录成功(会返回一个令牌,存在客户端,下次有进行用户身份的的请求在请求头带上) config.header[\"Authorization\"]=\"Bearer \"+value   还需要在令牌前面拼接Bearer+一个空格:",
          "content": "{\n        \"message\": \"OK\",\n        \"status\": 200,\n        \"data\": {\n        \"token\": \"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vZGVtby56cC50b3A6NTEwMC9hcGkvdjEvd3gvY29tcGFueS9sb2dpbiIsImlhdCI6MTU4MjI0ODc5OCwiZXhwIjoxNTgyMjUyMzk4LCJuYmYiOjE1ODIyNDg3OTgsImp0aSI6IjdwUDNkM0hSZXRQRmoyRmsiLCJzdWIiOjMwNywicHJ2IjoiY2ZlN2VjOTlhMjNmNDM4OGU3ZjFkNWZiODcwODM3NWM4NTRlZGE2NCJ9.O2vtx4k4TEGByV-p9Ul1e6C-45Qyt0fVpCz6iwQ9XJY\"\n        }\n        }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "400:",
          "content": "{\n        \"message\": \"账号或密码错误\",\n        \"status\": 400,\n        \"errors\": []\n        }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/home/ymh/www/aix-system/app/Http/Controllers/Api/V1/DemoController.php",
    "groupTitle": "企业"
  },
  {
    "type": "get",
    "url": "api/v1/wx/company/jobfair/company/code",
    "title": "企业二维码",
    "name": "company_code",
    "group": "GroupCompany",
    "permission": [
      {
        "name": "token(企业)"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "成功200(返回base64码):",
          "content": "{\"status\":200,\"msg\":\"success\",\"data\":{\"img\":\"iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAIAAAD2HxkiAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAHVElEQVR4nO3dQW7cOBQAUTuY+x85mF1moUEgy58sdvu9td2S7RQE\\/JDi5+\\/fvz+Azq\\/6BuCnEyHERAgxEUJMhBATIcRECDERQkyEEBMhxEQIMRFCTIQQEyHERAgxEUJMhBATIcRECDERQkyEEBMhxEQIMRFCTIQQEyHE\\/hn\\/xF+\\/yrDXvdX\\/+nPdudad38bU59xxvdbUHT6z7re6zvhvw5MQYiKEmAghJkKIiRBi89PRq52ztWdfc3W951c8TfXOLPTO10zNMNd9V\\/tv7LuXWH0B4O9ECDERQkyEEBMhxHZMR6+mJpbPvuvnzFTX\\/aTPPJvNTl3rjuTv5UkIMRFCTIQQEyHERAixZjq609REbmpu9ux+1q26vOOFJo2vyJMQYiKEmAghJkKIiRBi7z8dvaPdXb7u3ZtTU991KzzvXOvteRJCTIQQEyHERAgxEUKsmY7unIBNTSPvmJqFrluruXOvfXu+0gtNWT0JISZCiIkQYiKEmAghtmM62p4w3k4sp0y9PXXqZ2\\/v584nv5AXvnV4DyKEmAghJkKIiRBiny+0xO6Zqd3l7Vs922lt+6bWt+dJCDERQkyEEBMhxEQIsWbt6LpZ37O3aF61q0mfzRXbdaHtityd9zzOkxBiIoSYCCEmQoiJEGLz09HTZqFX6\\/Zur5vR3fmuqU++Y93V100jT3tbwh9H3AT8ZCKEmAghJkKIiRBi8zvrd07A2t3lV+dPfU9b79r+a7F2FPj4ECHkRAgxEUJMhBDbsbN+3crMnVPWZG624eo7z2Caup+p77J2FPj4ECHkRAgxEUJMhBDbMR1dZ2o14NQay3VvNG3nk3dMva\\/gtNOmNkzFPQkhJkKIiRBiIoSYCCF2yqlMV+vOGLpzh888+5zT9uPf+eT2HZ4799pv4EkIMRFCTIQQEyHERAixZu1oO428Wrd2tH0X6LN1s88+58533TF1Pzun4t90xE3ATyZCiIkQYiKEmAgh9to769ftZJ\\/Srm5d98lTv9X2u5KVoleehBATIcRECDERQkyEEDtlOjq11\\/6OdW\\/InHo76M7fxrr55CGzxz+e\\/VwbeBJCTIQQEyHERAgxEUJsfjq6bmXmzvOMrp6d4PPsk6e+pp1YTl193V\\/5kPmtJyHERAgxEUJMhBATIcQ+5w\\/g3njGULtr\\/o52arfuHKtnV39m3dsJTEeBjw8RQk6EEBMhxEQIsfnp6NW6FZXPrjX1yesmn6ete9z5F7yjPTNr\\/j8UZj8O+CoRQkyEEBMhxEQIsfmd9VNvrVw3uZqad+08X+mZnWtrd\\/7s7TtXx3kSQkyEEBMhxEQIMRFCbMfa0WfWrcM8bRa689z2O057G8AzL3TalCchxEQIMRFCTIQQEyHETnnv6M5J486vmbrDq50T1Hby+YrvIvgST0KIiRBiIoSYCCEmQojN76y\\/andz73zL6M4z2U9b4blunnzHIXvkn3mZG4V3JUKIiRBiIoSYCCG2Y+3oaafzTGlXgT5z2lTzaud7BpJ99FeehBATIcRECDERQkyEEJtfO3razvHTvuaO03bE3\\/nkZK74JceuLz3iJuAnEyHERAgxEUJMhBDbsbP+6tkk7bTZY2vqp1g3451aE3vnfnb+FE5lgncjQoiJEGIihJgIIbbjzPrTdmE\\/++SrnbPZdmf9HefPnJ\\/9Te2sh\\/cnQoiJEGIihJgIIda8d3RqBrVzv\\/n5Z8SfNhledx7WlENOuvckhJgIISZCiIkQYiKE2I7p6FV7jnx7ys8z697mOvVd7UraqX91ybzUkxBiIoSYCCEmQoiJEGLNdPSO03agP7vW+WcV7ZyX7tx9f\\/7K1f8uuvoCwN+JEGIihJgIISZCiDWnMu1cxbfzBKipSeOUnWtrp+w8E+rZ1a0dhXcjQoiJEGIihJgIIfZuZ9avm7uevyp1ytTMeWrCPOW0Vbt\\/eBJCTIQQEyHERAgxEUJsx5n1rZ2nRN25+jPtnvR2Texpb6m1dhTejQghJkKIiRBiIoTY\\/NrRdVO7O3au+dy5u3zd50ztW3\\/2m1939TuSWeiVJyHERAgxEUJMhBATIcR27KxfN1+aehfozreM7txvPjXDnHLaatJDHHpb8HOIEGIihJgIISZCiJ3y3tE7dq4C3TkvvfM5d6w7a\\/6Zqf34p81U7ayHdyNCiIkQYiKEmAgh1kxHW1P7qdftf382w2zfRLruu66mZrxT9\\/NNnoQQEyHERAgxEUJMhBB7\\/+nozvOMnlk3m51a77pu7\\/9ps9BnV\\/+ms\\/45wg8kQoiJEGIihJgIIdZMR09712X7ZtSp77qaWpU6da2rdb+fY\\/fR\\/89FV18A+DsRQkyEEBMhxEQIsc\\/5hXCHnVl\\/NTUh3DlXXHf++537uXOtnW+FnfqaQ3gSQkyEEBMhxEQIMRFCbH46CnyJJyHERAgxEUJMhBATIcRECDERQkyEEBMhxEQIMRFCTIQQEyHERAgxEUJMhBATIcRECDERQkyEEBMhxEQIMRFCTIQQEyHERAixfwFmdp1wmOIdFwAAAABJRU5ErkJggg==\"}}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/home/ymh/www/aix-system/app/Http/Controllers/Api/V1/WX/Company/JobfairController.php",
    "groupTitle": "企业"
  },
  {
    "type": "post",
    "url": "/api/v1/wx/company/userinfo",
    "title": "企业基本信息",
    "name": "company_userinfo",
    "group": "GroupCompany",
    "permission": [
      {
        "name": "token"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "成功200:",
          "content": "{\n\"companyname\": \"其企业名称\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/home/ymh/www/aix-system/app/Http/Controllers/Api/V1/WX/Company/HomeController.php",
    "groupTitle": "企业"
  },
  {
    "type": "get",
    "url": "/api/v1/wx/company/index_jobfair",
    "title": "企业首页的推荐职位",
    "name": "index_jobfair",
    "group": "GroupCompany",
    "permission": [
      {
        "name": "token"
      }
    ],
    "version": "0.0.0",
    "filename": "/home/ymh/www/aix-system/app/Http/Controllers/Api/V1/WX/Company/JobfairController.php",
    "groupTitle": "企业"
  },
  {
    "type": "post",
    "url": "/api/v1/wx/jobfairnet/jobsave",
    "title": "网络招聘会职位添加和修改",
    "name": "jobs_add",
    "group": "GroupCompany",
    "permission": [
      {
        "name": "token"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>简历ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "major",
            "description": "<p>专业要求</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "jobs_name",
            "description": "<p>(必填无疑)\t职位名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "iscustomize",
            "description": "<p>否\t不需要的字段(带空值)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nature",
            "description": "<p>(必填无疑)\t工作性质</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ygxs",
            "description": "<p>否\t用工形式</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "techlevel",
            "description": "<p>否\t技能登记</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "jobcategory",
            "description": "<p>(必填无疑)\t职位类别</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "district",
            "description": "<p>(必填无疑)\t地区分类</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "wage",
            "description": "<p>(必填无疑)\t薪资待遇（-1面议，0自定义，其他为选择区间）</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "education",
            "description": "<p>否\t学历ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "experience",
            "description": "<p>否\t工作经验ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sex",
            "description": "<p>string\t否\t性别：1男；2女；0不限</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "amount",
            "description": "<p>(必填无疑)\t招聘人数</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "age",
            "description": "<p>(必填无疑)\t年龄数组 [18,22]</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tag",
            "description": "<p>(必填无疑)\t标签分类(“152,153,154”)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "jobs_content",
            "description": "<p>(必填无疑)\t职位描述</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "contact",
            "description": "<p>(必填无疑)\t联系人姓名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "telephone",
            "description": "<p>(必填无疑)\t联系手机号码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "landline_tel",
            "description": "<p>(必填无疑)\t联系电话号码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>(必填无疑)\t邮箱</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>(必填无疑)\t联系地址</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "contact_show",
            "description": "<p>(必填无疑)\t是否显示联系人 1显示 0 不显示</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "telephone_show",
            "description": "<p>(必填无疑)\t是否显示手机号码 1显示 0 不显示</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "landline_tel_show",
            "description": "<p>(必填无疑)\t是否显示电话号码 1显示 0 不显示</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email_show",
            "description": "<p>(必填无疑)\t是否显示邮箱 1显示 0 不显示</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "notify",
            "description": "<p>无</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "notify_mobile",
            "description": "<p>无</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "basis_contact",
            "description": "<p>无</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "wage_min",
            "description": "<p>是\t最大薪资</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "wage_max",
            "description": "<p>无\t最小薪资</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "map_x",
            "description": "<p>无\t地图坐标X轴</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "map_y",
            "description": "<p>无\t地图坐标Y轴</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "syq",
            "description": "<p>无\t试用期ID s@apiParam {String}　yqxz_min\t\t无\t试用期工资</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求示例:",
          "content": "查看PostMan",
          "type": "String"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "成功200:",
          "content": "{\n    \"status\": 1,\n    \"msg\": \"招聘会职位添加成功！\",\n    \"id\": {}\n}\n\n{\n    \"status\": 1,\n    \"msg\": \"招聘会职位修改成功！\",\n    \"id\": \"1070\"\n    }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/home/ymh/www/aix-system/app/Http/Controllers/Api/JobfairNet/JobfairNetController.php",
    "groupTitle": "企业"
  },
  {
    "type": "get",
    "url": "api/v1/wx/jobs/company?id=362&jobfair_type=net",
    "title": "查看企业详情和在找职位",
    "name": "jobs_company",
    "group": "GroupCompany",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>企业id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "jobfair_type",
            "description": "<p>如果是网络招聘会会就带net</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "注释查看:",
          "content": "http://develop.doc.jsaix.cn/web/#/9?page_id=174",
          "type": "Text"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/home/ymh/www/aix-system/app/Http/Controllers/Api/V1/WX/Person/HomeController.php",
    "groupTitle": "企业"
  },
  {
    "type": "get",
    "url": "api/v1/wx/jobfairnet/myjoinJob?jobfair_id=69",
    "title": "某厂招聘会的参会职位",
    "name": "myjoinJob",
    "group": "GroupCompany",
    "permission": [
      {
        "name": "token"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "jobfair_id",
            "description": "<p>招聘会ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功:",
          "content": "{\n\"job_id\": \"职位ID\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/home/ymh/www/aix-system/app/Http/Controllers/Api/JobfairNet/JobfairNetController.php",
    "groupTitle": "企业"
  },
  {
    "type": "get",
    "url": "/api/v1/wx/public/companyNameSearch?search_key=图尔克",
    "title": "根据名称搜索企业",
    "name": "public_companyNameSearch",
    "group": "GroupCompany",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "search_key",
            "description": "<p>搜索关键字</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "/home/ymh/www/aix-system/app/Http/Controllers/Api/V1/WX/Company/HomeController.php",
    "groupTitle": "企业"
  },
  {
    "type": "post",
    "url": "/api/v1/wx/company/resume/show?id=572",
    "title": "查看个人简历详情",
    "name": "resume_show",
    "group": "GroupCompany",
    "permission": [
      {
        "name": "token"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>简历ID</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "错误200:",
          "content": "{\n\"status\": 0,\n\"msg\": \"简历不存在\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "成功200:",
          "content": "字段注释信息 http://develop.doc.jsaix.cn/web/#/9?page_id=100",
          "type": "String"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/home/ymh/www/aix-system/app/Http/Controllers/Api/V1/WX/Company/ResumeController.php",
    "groupTitle": "企业"
  },
  {
    "type": "post",
    "url": "/api/v1/wx/jobfairnet/blue/createJobs",
    "title": "蓝领招聘会创建群聊(创建招聘会)",
    "name": "blue_createJobs",
    "group": "GroupJobFairBlue",
    "permission": [
      {
        "name": "token(管理员)"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>简历ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求示例:",
          "content": "{\n\n    \"title\":\"测试蓝领\", //招聘会标题\n    \"number\":4,  //展位数\n    \"contact\":\"李彦宏\", //联系人名称\n    \"phone\":\"18812341234\", //联系人电话\n    \"undertake\":\"大兴国际机场\", //地址\n    \"jobfair_type\":\"\", //带空值\n    \"subsites\":[], //带空数组\n    \"subsite_id\":0, //分站默认带0\n    \"jobfair_introduction\":\"<p>阿萨莎莎大的我的</p>\", //招聘会简介\n    \"holddate_start\":\"2020-03-04 00:00:00\", //开始时间\n    \"holddate_end\":\"2020-03-21 00:00:00\", //结束时间\n    \"predetermined_start\":\"2020-02-26 00:00:00\", //预定开始时间\n    \"predetermined_end\":\"2020-03-07 00:00:00\", //预定结束时间\n    \"display\":\"1\", //显示状态(1正常 2暂停)\n    \"predetermined_status\":\"1\", //预定状态(1:允许预订,2:停止预订)\n    \"is_commonweal\":\"3\", //招聘会(1:消耗场次,2:消耗积分,3:公益)\n    \"predetermined_point\":\"100\", //预定消耗积分\n    \"jobsfair_num\":\"1\", //预定消耗场次\n    \"nosign_point\":\"300\", //未签到扣减积分\n    \"late_point\":\"100\" //迟到早退扣减积分\n\n    }",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "成功200:",
          "content": "{\n\"status\": 200,\n\"msg\": \"success\",\n\"data\": {\n\"title\": \"测试蓝领\",\n\"holddate_start\": 1583251200,\n\"holddate_end\": 1584720000,\n\"contact\": \"李彦宏\",\n\"phone\": \"18812341234\",\n\"undertake\": \"大兴国际机场\",\n\"jobfair_type\": null,\n\"display\": \"1\",\n\"is_commonweal\": \"3\",\n\"predetermined_point\": \"100\",\n\"jobsfair_num\": \"1\",\n\"nosign_point\": \"300\",\n\"late_point\": \"100\",\n\"number\": 4,\n\"jobfair_introduction\": \"<p>阿萨莎莎大的我的</p>\",\n\"subsite_id\": 0,\n\"predetermined_status\": \"1\",\n\"predetermined_start\": 1582646400,\n\"predetermined_end\": 1583510400,\n\"status\": 1,\n\"updated_at\": \"2020-03-05 20:41:50\",\n\"created_at\": \"2020-03-05 20:41:49\",\n\"id\": 38,\n\"group_id\": \"2779830197\", //群号码\n\"group_owner\": \"aix_b_a_1_38\" //创建者云信账号\n}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/home/ymh/www/aix-system/app/Http/Controllers/Api/JobFairBlue/JobFairBlueController.php",
    "groupTitle": "蓝领招聘会"
  },
  {
    "type": "get",
    "url": "/api/v1/wx/jobfairnet/jobfair/enact?type=1",
    "title": "蓝领招聘会的定展记录",
    "name": "jobFairBlue_enact",
    "group": "GroupJobFairBlue",
    "permission": [
      {
        "name": "token"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>招聘会类型(1 就是蓝领招聘会,2是现场招聘会,不带就是网络招聘会)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "audit",
            "description": "<p>审核状态 (1:预订成功,2:等待确认,3:审核未通过  默认全部)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "请求成功:",
          "content": "{\n        id:\"定展ID\",\n        audit:\"审核状态\",\n        etype:\"预订方式(1:在线预订,2:电话预定,3:现场预定\"\n        company_id:\"企业ID\",\n        jobfair_id:\"招聘会ID\",\n        position:\"展位号\",\n        jobfair_net_evaluate_count:\"应聘的个数\",\n        jobfair:\"招聘会信息\"\n    }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/home/ymh/www/aix-system/app/Http/Controllers/Api/JobfairNet/JobfairNetController.php",
    "groupTitle": "蓝领招聘会"
  },
  {
    "type": "get-post",
    "url": "api/v1/wx/jobfairnet/blue/jobfair/joinJobs",
    "title": "招聘会职位库职位加入蓝领招聘会",
    "name": "jobFairNet_joinJobs",
    "group": "GroupJobFairBlue",
    "permission": [
      {
        "name": "token"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "jobfair_id",
            "description": "<p>招聘会ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "exid",
            "description": "<p>参会记录ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "check_jobs_id",
            "description": "<p>选择的职位ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求参数示例:",
          "content": "{\n\"check_jobs_id\":[980,1024],\n\"jobfair_id\":48,\n\"exid\":223\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "请求示例:",
          "content": "\"GET请求返回\":{\n       \"jobs\": \"我的所有职位\",\n       \"join_jobs\":\"已加入改的招聘会的职位\"\n},\n\n\"POST请求返回\":{\n  \"status\": 200,\n  \"msg\": \"编辑成功!\",\n  \"data\": \"编辑成功!\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "失败参数:",
          "content": "{\n    招聘会已经结束\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/home/ymh/www/aix-system/app/Http/Controllers/Api/JobFairBlue/JobFairBlueController.php",
    "groupTitle": "蓝领招聘会"
  },
  {
    "type": "get",
    "url": "/api/v1/wx/jobfairnet/blue/select.do",
    "title": "所有蓝领招聘会列表",
    "name": "jobFairNet_select",
    "group": "GroupJobFairBlue",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>如果想搜索进行中就带 1  带举办就带 2,3</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "请求成功:",
          "content": "{\n\"id\":45,\n\"title\":\"招聘会标题\",\n\"holddate_start\":1582074000(招聘会开始时间),\n\"holddate_end\":1582297200(招聘会结束时间),\n\"jobfair_type\":1(招聘会类型),\n\"contact\":\"杨先生\"(联系人),\n\"phone\":\"电话\",\n\"status\":\"招聘会的状态 1：开启；2：预定中；3：未开始；4：已结束  \",\n\"jobfair_com_count\":\"0(参会企业个数)\"\n\"put_jobs_count\" :\"0(参会职位)\"\n\"sign_user_count\" :\"7(求职者)\"\n\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/home/ymh/www/aix-system/app/Http/Controllers/Api/JobFairBlue/JobFairBlueController.php",
    "groupTitle": "蓝领招聘会"
  },
  {
    "type": "get",
    "url": "/api/v1/wx/jobfairnet/jobfair/jobs_apply?type=1",
    "title": "蓝领招聘会职位的应聘记录",
    "name": "jobFairblue_jobs_apply",
    "group": "GroupJobFairBlue",
    "permission": [
      {
        "name": "token"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "jobfair_id",
            "description": "<p>招聘会ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "is_apply",
            "description": "<p>应聘结果（0:暂无评价,1：待定，2：可面试，3：不合适）</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>招聘会类型(1 就是蓝领招聘会,不带就是网络招聘会)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "请求成功:",
          "content": "{\n\"jobfair_jobs\": \"招聘会职位\",\n\"tag_arr\" :\"状态标签\",\n\"jobfair_apply\":[\"jobfair_net_put_job_id\":\"应聘的职位ID\"],\n\"is_apply\": \"应聘结果（0:暂无评价,1：待定，2：可面试，3：不合适）\",\n \"is_job\":\"职位评价（0:暂无评价，1：待定，2：合适，3：不合适）\",\n\"net_put_job\":\"应聘的职位\",\n\"jobfair_net\":\"招聘会信息\",\n\"resumes\":\"我投递的简历信息\"\n\"type\":\"如果带1就是蓝领招聘会,不带则是网络\"\n\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/home/ymh/www/aix-system/app/Http/Controllers/Api/JobfairNet/JobfairNetController.php",
    "groupTitle": "蓝领招聘会"
  },
  {
    "type": "get",
    "url": "api/v1/wx/jobfairnet/blue/show.do",
    "title": "蓝领招聘会详情",
    "name": "jobfairnet_blue_show",
    "group": "GroupJobFairBlue",
    "permission": [
      {
        "name": "token"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>招聘会ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "uuid",
            "description": "<p>随机数</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功200:",
          "content": "\n具体注释看网络招聘会详情(参加群聊接口)",
          "type": "String"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/home/ymh/www/aix-system/app/Http/Controllers/Api/JobFairBlue/JobFairBlueController.php",
    "groupTitle": "蓝领招聘会"
  },
  {
    "type": "get",
    "url": "/api/v1/wx/jobfairnet/jobfair/search?search_type=company&search_key=江苏",
    "title": "网络招聘会首页搜索",
    "name": "home_search",
    "group": "GroupJobFairNet",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "search_type",
            "description": "<p>企业带company 职位带job 招聘会名称带jobfair</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "search_key",
            "description": "<p>搜索的关键字</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功200:",
          "content": "{\n\"jobfair_put_job_count\": \"这是搜索企业时候,企业列表应该出现的招聘职位个数\",\n\"wage_cn\": \"搜索职位的时候的薪资\",\n\"company_name\": \"搜索职位的时候的公司名称\",\n\"搜索招聘会一样\":\"\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/home/ymh/www/aix-system/app/Http/Controllers/Api/JobfairNet/JobfairNetController.php",
    "groupTitle": "网络招聘会"
  },
  {
    "type": "post",
    "url": "/api/v1/wx/jobfairnet/im/seek/resume",
    "title": "个人向企业发送简历(企业向个人索要简历,同意发送简历)",
    "name": "im_seek_resume",
    "group": "GroupJobFairNet",
    "permission": [
      {
        "name": "token (个人)"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "im_id",
            "description": "<p>企业的im账号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "resume_id",
            "description": "<p>简历ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>0 (就是同意) 1 不同意 (单纯的向企业发送简历的话就不带code)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求示例:",
          "content": "{\n    \"im_id\":\"aix_n_c_480_45\",\n    \"resume_id\":\"191\",\n    \"code\":\"0\"\n    }",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "发送成功:",
          "content": "{\n    \"status\": 200,\n    \"msg\": \"成功\",\n    \"data\": \"成功\"\n    }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/home/ymh/www/aix-system/app/Http/Controllers/Api/JobfairNet/JobfairNetController.php",
    "groupTitle": "网络招聘会"
  },
  {
    "type": "post",
    "url": "api/v1/wx/jobfairnet/im/userinfo",
    "title": "获取聊天的信息",
    "name": "im_userinfo",
    "group": "GroupJobFairNet",
    "permission": [
      {
        "name": "token"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "im_id",
            "description": "<p>云信账号</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求示例:",
          "content": "{\n        \"im_id\":\"aix_n_m_88_45\"\n      }",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "成功200:",
          "content": "{\n    \"message\": \"OK\",\n    \"status\": 200,\n    \"data\": {\n    \"uid\": 88,\n    \"utype\": 2,\n    \"accid\": \"aix_n_m_88_45\",\n    \"realname\": \"蒋林姓名是最长的时候\",\n    \"sex_cn\": \"男\",\n    \"education_cn\": \"硕士\",\n    \"experience_cn\": \"1年以下\",\n    \"residence_cn\": \"浙江-舟山\",\n    \"householdaddress_cn\": \"浙江-舟山\",\n    \"qq\": \"425586441\",\n    \"weixin\": null,\n    \"age\": 32,\n    \"email\": \"425586441@qq.com\",\n    \"email_audit\": 0,\n    \"mobile\": 18358092689,\n    \"mobile_audit\": 0,\n    \"is_resume\": 1,\n    \"talk_id\": \"\",\n    \"wage_cn\": \"\",\n    \"job_name\": \"\",\n    \"evaluate_id\": \"\",\n    \"school\": \"牛津大学\",\n    \"intention_jobs\": \"行政专员/助理+分公司经理\",\n    \"resume_wage_cn\": \"3K~5K/月\",\n    \"work_companyname\": \"英国皇家科学研究院\",\n    \"work_job\": \"暗物质民用化研究员\",\n    \"district_cn\": \"舟山+玄武区\",\n    \"work_time\": \"2017-10-2019-1\",\n    \"educaion_time\": \"2013-6-2016-9\",\n    \"education_speciality\": \"暗物质实用化研究\",\n\"work_List\":\"[]//工作经历\"\n    }\n    }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/home/ymh/www/aix-system/app/Http/Controllers/Api/JobfairNet/JobfairNetController.php",
    "groupTitle": "网络招聘会"
  },
  {
    "type": "get",
    "url": "/api/v1/wx/jobfairnet/im/company/talk",
    "title": "企业向个人发起洽谈",
    "name": "jobFairNet_company_talk",
    "group": "GroupJobFairNet",
    "permission": [
      {
        "name": "token"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "person_id",
            "description": "<p>个人ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>职位ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "talk_id",
            "description": "<p>会话</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "/home/ymh/www/aix-system/app/Http/Controllers/Api/JobfairNet/JobfairNetController.php",
    "groupTitle": "网络招聘会"
  },
  {
    "type": "get",
    "url": "api/v1/wx/company/jobfair/jobs/edit?id=1082",
    "title": "招聘会职位库职位详情1",
    "name": "jobFairNet_edit",
    "group": "GroupJobFairNet",
    "permission": [
      {
        "name": "token"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>职位库职位ID</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "/home/ymh/www/aix-system/app/Http/Controllers/Api/V1/WX/Company/JobfairController.php",
    "groupTitle": "网络招聘会"
  },
  {
    "type": "get",
    "url": "/api/v1/wx/jobfairnet/jobfair/enact",
    "title": "我的定展记录",
    "name": "jobFairNet_enact",
    "group": "GroupJobFairNet",
    "permission": [
      {
        "name": "token"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>招聘会类型(1 就是蓝领招聘会,2是现场招聘会,不带就是网络招聘会)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "audit",
            "description": "<p>审核状态 (1:预订成功,2:等待确认,3:审核未通过  默认全部)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "请求成功:",
          "content": "{\n        id:\"定展ID\",\n        audit:\"审核状态\",\n        etype:\"预订方式(1:在线预订,2:电话预定,3:现场预定\"\n        company_id:\"企业ID\",\n        jobfair_id:\"招聘会ID\",\n        position:\"展位号\",\n        jobfair_net_evaluate_count:\"应聘的个数\",\n       jobfair:\"招聘会信息\"\n      }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/home/ymh/www/aix-system/app/Http/Controllers/Api/JobfairNet/JobfairNetController.php",
    "groupTitle": "网络招聘会"
  },
  {
    "type": "get",
    "url": "api/v1/wx/jobfairnet/im/accid?jobfair_id=45",
    "title": "获取云信账信息",
    "name": "jobFairNet_im_accid",
    "group": "GroupJobFairNet",
    "permission": [
      {
        "name": "token"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "请求成功:",
          "content": "{\n\"status\": 200,\n\"msg\": \"success\",\n\"data\": {\n\"accid\": \"aix_n_m_211_36\",\n\"name\": \"同志娟\",\n\"token\": \"eb163727917cbba1eea208541a643e74\"\n}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/home/ymh/www/aix-system/app/Http/Controllers/Api/JobfairNet/JobfairNetController.php",
    "groupTitle": "网络招聘会"
  },
  {
    "type": "post",
    "url": "/api/v1/wx/jobfairnet/im/company/online",
    "title": "网络招聘会参会企业在线心跳包",
    "name": "jobFairNet_im_heartbeat",
    "group": "GroupJobFairNet",
    "permission": [
      {
        "name": "token"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "jobfair_id",
            "description": "<p>招聘会ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求示例:",
          "content": "{\n\"jobfair_id\": 56\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>[token=&gt;&quot; &quot;]</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "跳成功:",
          "content": "{\n        \"status\": 1,\n        \"info\": \"ok\"\n        }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>用户名密码错误暂无改用户</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "/home/ymh/www/aix-system/app/Http/Controllers/Api/JobfairNet/JobfairNetController.php",
    "groupTitle": "网络招聘会"
  },
  {
    "type": "get",
    "url": "/api/v1/wx/jobfairnet/jobfair/jobs_apply",
    "title": "招聘会职位的应聘记录",
    "name": "jobFairNet_jobs_apply",
    "group": "GroupJobFairNet",
    "permission": [
      {
        "name": "token"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "jobfair_id",
            "description": "<p>招聘会ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "is_apply",
            "description": "<p>应聘结果（0:暂无评价,1：待定，2：可面试，3：不合适）</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>招聘会类型(1 就是蓝领招聘会,不带就是网络招聘会)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "请求成功:",
          "content": "{\n\"jobfair_jobs\": \"招聘会职位\",\n\"tag_arr\" :\"状态标签\",\n\"jobfair_apply\":[\"jobfair_net_put_job_id\":\"应聘的职位ID\"],\n\"is_apply\": \"应聘结果（0:暂无评价,1：待定，2：可面试，3：不合适）\",\n \"is_job\":\"职位评价（0:暂无评价，1：待定，2：合适，3：不合适）\",\n\"net_put_job\":\"应聘的职位\",\n\"jobfair_net\":\"招聘会信息\",\n\"resumes\":\"我投递的简历信息\"\n\"type\":\"如果带1就是蓝领招聘会,不带则是网络\"\n\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/home/ymh/www/aix-system/app/Http/Controllers/Api/JobfairNet/JobfairNetController.php",
    "groupTitle": "网络招聘会"
  },
  {
    "type": "get-post",
    "url": "/api/v1/wx/jobfairnet/join",
    "title": "预定招聘会",
    "name": "jobFairNet_join",
    "group": "GroupJobFairNet",
    "permission": [
      {
        "name": "token(企业)"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "jobfair_id",
            "description": "<p>招聘会ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求说明:",
          "content": "如果是Get请求只需要带jobfair_id,会返回给你的预定的提示信息\nPOST 请求同样也是带jobfair_id",
          "type": "String"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "预定成功:",
          "content": "{\n\"status\": 200,\n\"msg\": \"展位已保留，请关注审核结果并及时提交招聘会职位！\",\n\"data\": {\n\"companyname\": \"杭州老猪科技有限公司\"\n}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/home/ymh/www/aix-system/app/Http/Controllers/Api/JobfairNet/JobfairNetController.php",
    "groupTitle": "网络招聘会"
  },
  {
    "type": "get-post",
    "url": "api/v1/wx/jobfairnet/jobfair/joinJobs",
    "title": "招聘会职位库职位加入招聘会",
    "name": "jobFairNet_joinJobs",
    "group": "GroupJobFairNet",
    "permission": [
      {
        "name": "token"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "jobfair_id",
            "description": "<p>招聘会ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "exid",
            "description": "<p>参会记录ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "check_jobs_id",
            "description": "<p>选择的职位ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求参数示例:",
          "content": "{\n \"check_jobs_id\":[980,1024],\n \"jobfair_id\":48,\n \"exid\":223\n }",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "请求示例:",
          "content": "\"GET请求返回\":{\n       \"jobs\": \"我的所有职位\",\n       \"join_jobs\":\"已加入改的招聘会的职位\"\n},\n\n\"POST请求返回\":{\n  \"status\": 200,\n  \"msg\": \"编辑成功!\",\n  \"data\": \"编辑成功!\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "失败参数:",
          "content": "{\n        招聘会已经结束\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/home/ymh/www/aix-system/app/Http/Controllers/Api/JobfairNet/JobfairNetController.php",
    "groupTitle": "网络招聘会"
  },
  {
    "type": "post",
    "url": "/api/v1/wx/jobfairnet/im/talk/listThree",
    "title": "洽谈申请记录",
    "name": "jobFairNet_listThree",
    "group": "GroupJobFairNet",
    "permission": [
      {
        "name": "token"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "jobfair_id",
            "description": "<p>招聘会ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "请求成功:",
          "content": "{\n\"jobfair_net_id\": \"招聘会ID\",\n\"person_id\":\"个人ID\",\n\"jobfair_net_put_job_id\":洽谈的职位ID\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/home/ymh/www/aix-system/app/Http/Controllers/Api/JobfairNet/JobfairNetController.php",
    "groupTitle": "网络招聘会"
  },
  {
    "type": "post",
    "url": "/api/v1/wx/jobfairnet/im/person/talk",
    "title": "个人-企业 发起洽谈",
    "name": "jobFairNet_person_talk",
    "group": "GroupJobFairNet",
    "permission": [
      {
        "name": "token"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>参会职位ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "talk_id",
            "description": "<p>回话ID</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "/home/ymh/www/aix-system/app/Http/Controllers/Api/JobfairNet/JobfairNetController.php",
    "groupTitle": "网络招聘会"
  },
  {
    "type": "get",
    "url": "api/v1/wx/jobfairnet/jobfair/quartersist",
    "title": "招聘会职位库",
    "name": "jobFairNet_quartesrsit",
    "group": "GroupJobFairNet",
    "permission": [
      {
        "name": "token"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "请求成功(数据隶属于jobfair_jobs表):",
          "content": "{\n\n\"id\": \"4711\"\n\"jobs_name\": \"职位名称\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/home/ymh/www/aix-system/app/Http/Controllers/Api/JobfairNet/JobfairNetController.php",
    "groupTitle": "网络招聘会"
  },
  {
    "type": "get",
    "url": "/api/v1/wx/jobfairnet/jobfair/select.do",
    "title": "所有网络招聘会",
    "name": "jobFairNet_select",
    "group": "GroupJobFairNet",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>如果想搜索进行中就带 1  带举办就带 2,3</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "分页说明:",
          "content": "http://develop.doc.jsaix.cn/web/#/9?page_id=119",
          "type": "String"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "请求成功:",
          "content": "{\n\"id\":45,\n\"title\":\"招聘会标题\",\n\"holddate_start\":1582074000(招聘会开始时间),\n\"holddate_end\":1582297200(招聘会结束时间),\n\"jobfair_type\":1(招聘会类型),\n\"contact\":\"杨先生\"(联系人),\n\"phone\":\"电话\",\n\"status\":\"招聘会的状态 1：开启；2：预定中；3：未开始；4：已结束  \",\n\"jobfair_com_count\":\"0(参会企业个数)\"\n\"put_jobs_count\" :\"0(参会职位)\"\n\"sign_user_count\" :\"7(求职者)\"\n\n'panel':{\n        \"joinCompanyTotal\" :\"企业\",\n        \"putJobsTotal\" :\"职位数量\",\n        \"perCount\" :\"求职者\",\n        \"job_amountCount\" :\"需求人数\"\n}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/home/ymh/www/aix-system/app/Http/Controllers/Api/JobfairNet/JobfairNetController.php",
    "groupTitle": "网络招聘会"
  },
  {
    "type": "get",
    "url": "/api/v1/wx/jobfairnet/show/54?uuid=123123&page=1",
    "title": "查看某场招聘会的信息",
    "name": "jobFairNet_show",
    "group": "GroupJobFairNet",
    "permission": [
      {
        "name": "token"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "uuid",
            "description": "<p>客户端唯一ID,就是要一直带这个值,可以从https://bandung.gitee.io/aix_system_apidoc/#api-GroupSystem-system_uuid获取</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "page",
            "description": "<p>页数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "search_type",
            "description": "<p>搜索类型 个人带person 职位job 企业company</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>搜索参数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "online",
            "description": "<p>是否筛选在线的企业,或者是否在线的求职者 带1</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "返回示例:",
          "content": "{\n\"jobfair\": \"招聘会信息\",\n\"hotjob\": \"热门职位\",\n\"jobfairComCount\": \"参会企业个数\",\n\"putJobCount\": \"参会职位个数\",\n\"perCount\": \"求职者个数\",\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/home/ymh/www/aix-system/app/Http/Controllers/Api/JobfairNet/JobfairNetController.php",
    "groupTitle": "网络招聘会"
  },
  {
    "type": "post",
    "url": "/api/v1/wx/jobfairnet/im/talk/end",
    "title": "结束洽谈",
    "name": "jobFairNet_talk_end",
    "group": "GroupJobFairNet",
    "permission": [
      {
        "name": "token"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "talk_id",
            "description": "<p>会话ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "evaluate_status",
            "description": "<p>企业对个人的评价的状态0:暂无评价,1：待定，2：可面试，3：不合适） 个人对企业的评价 （0:暂无评价，1：待定，2：合适，3：不合适）</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "evaluate_id",
            "description": "<p>应聘记录ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求示例:",
          "content": "{\n         talk_id: 682\n        evaluate_id: 439\n        evaluate_status: 1\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/home/ymh/www/aix-system/app/Http/Controllers/Api/JobfairNet/JobfairNetController.php",
    "groupTitle": "网络招聘会"
  },
  {
    "type": "get",
    "url": "/api/v1/wx/public/jobfairnet/job/show?id=428",
    "title": "网络招聘会职位详情",
    "name": "jobfairnet_job_show",
    "group": "GroupJobFairNet",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>职位ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功200:",
          "content": "{\n\"jobs_name\": \"职位名称\",\n\"company_name\": \"公司名称!\",\n\"district_cn\": \"地区!\",\n\"experience_cn\": \"经验\",\n\"education_cn\": \"学历\",\n\"jobs_content\": \"职位描述\",\n\"tag\":\"职位特点\",\n\"mobile\": 13952842458,\n\"contact\": \"联系人姓名\",\n\"landline_tel\": \"电话号码\",\n\"address\": \"地址\",\n\"telephone_show\": \"是否显示手机0不显示1显示\",\n\"email_show\" :'是否显示邮箱0不显示1显示',\n\"landline_tel_show\":'是否显示固话 0不显示1显示',\n\"contact_show\":\"是否显示联系人0不显示1显示\"\n\"企业信息的第二个\":\"economy_cn\"\n\"企业信息的第三个\":\"scale_cn\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/home/ymh/www/aix-system/app/Http/Controllers/Api/V1/WX/Person/HomeController.php",
    "groupTitle": "网络招聘会"
  },
  {
    "type": "post",
    "url": "/api/v1/wx/jobfairnet/jobdel",
    "title": "删除招聘会职位库职位",
    "name": "jobfairnet_jobdel",
    "group": "GroupJobFairNet",
    "permission": [
      {
        "name": "token"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "y_id",
            "description": "<p>职位id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求示例:",
          "content": "{\n    \"y_id\":[1033,1034]\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "错误200:",
          "content": "{\n\"status\": 0,\n\"msg\": \"只能操作你自己的职位\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/home/ymh/www/aix-system/app/Http/Controllers/Api/JobfairNet/JobfairNetController.php",
    "groupTitle": "网络招聘会"
  },
  {
    "type": "get",
    "url": "api/v1/wx/jobfairnet/show_com?jobfair_id=68",
    "title": "网络招聘会详情中的 参会企业和求职者",
    "name": "jobfairnet_show_com",
    "group": "GroupJobFairNet",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "jobfair_id",
            "description": "<p>招聘会ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "page",
            "description": "<p>页数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "search_type",
            "description": "<p>搜索类型 个人带person 职位job 企业company 简历resume</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>搜索参数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "online",
            "description": "<p>是否筛选在线的企业,或者是否在线的求职者 带1</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功200:",
          "content": "{\n\"jobfairCom\": \"参会企业信息\",\n\"perList\": \"求职者信息\"\n\"job\": \"职位信息\"\n\"resumes\": \"简历信息\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/home/ymh/www/aix-system/app/Http/Controllers/Api/JobfairNet/JobfairNetController.php",
    "groupTitle": "网络招聘会"
  },
  {
    "type": "post",
    "url": "/api/v1/wx/company/jobfair/JobsSave",
    "title": "添加职位到招聘会职位库",
    "name": "jobfair_JobsSave",
    "group": "GroupJobFair",
    "permission": [
      {
        "name": "token"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "请求示例:",
          "content": "字段注释查看 http://develop.doc.jsaix.cn/web/#/9?page_id=121\n请求示例查看 postman",
          "type": "Text"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "成功200:",
          "content": "{\n    \"status\": 1,\n    \"msg\": \"招聘会职位添加成功！\",\n    \"id\": {\n    \"company_id\": 484,\n    \"company_name\": \"找平铜软件有限公司\",\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/home/ymh/www/aix-system/app/Http/Controllers/Api/V1/WX/Company/JobfairController.php",
    "groupTitle": "招聘会"
  },
  {
    "type": "get",
    "url": "api/v1/wx/jobfairnet/now/select.do",
    "title": "现场招聘会(和网络招聘会请求的参数一样)",
    "name": "now_select.do",
    "group": "GroupJobFair",
    "success": {
      "examples": [
        {
          "title": "成功200:",
          "content": "具体查看网络招聘会(面板数据就用网络招聘会的数据)",
          "type": "String"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/home/ymh/www/aix-system/app/Http/Controllers/Api/JobFairBlue/JobFairBlueController.php",
    "groupTitle": "招聘会"
  },
  {
    "type": "get",
    "url": "/api/v1/wx/jobfairnet/now/show/54?uuid=123123",
    "title": "查看现场招聘会的信息",
    "name": "now_show",
    "group": "GroupJobFair",
    "permission": [
      {
        "name": "token"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "uuid",
            "description": "<p>客户端唯一ID,就是要一直带这个值,可以从https://bandung.gitee.io/aix_system_apidoc/#api-GroupSystem-system_uuid获取</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "page",
            "description": "<p>页数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "search_type",
            "description": "<p>搜索类型 个人带person 职位job 企业company</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>搜索参数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "online",
            "description": "<p>是否筛选在线的企业,或者是否在线的求职者 带1</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "返回示例:",
          "content": "{\n\"jobfair\": \"招聘会信息\",\n\"hotjob\": \"热门职位\",\n\"jobfairComCount\": \"参会企业个数\",\n\"putJobCount\": \"参会职位个数\",\n\"perCount\": \"求职者个数\",\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/home/ymh/www/aix-system/app/Http/Controllers/Api/JobfairNet/JobfairNetController.php",
    "groupTitle": "招聘会"
  },
  {
    "type": "post",
    "url": "/api/v1/wx/jobfairnet/im/person/apply",
    "title": "个人投递招聘会职位",
    "name": "im_person_apply",
    "group": "GroupPerson",
    "permission": [
      {
        "name": "token"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "jobfair_net_put_job_id",
            "description": "<p>职位ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "resume_id",
            "description": "<p>简历ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求示例:",
          "content": "{\n    \"jobfair_net_put_job_id\":\"417\",\n    \"resume_id\":\"256\"\n    }",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "成功200:",
          "content": "    {\n    \"status\": 200,\n    \"msg\": \"您已投递过该职位，不可重复投递\",\n    \"data\": \"您已投递过该职位，不可重复投递\"\n    }\n{\n    \"status\": 200,\n    \"msg\": \"投递成功\",\n    \"data\": \"投递成功\"\n    }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/home/ymh/www/aix-system/app/Http/Controllers/Api/JobfairNet/JobfairNetController.php",
    "groupTitle": "个人"
  },
  {
    "type": "get",
    "url": "api/v1/wx/person/jobfair/code",
    "title": "个人二维码",
    "name": "jobfair_code",
    "group": "GroupPerson",
    "permission": [
      {
        "name": "token(个人)"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "成功200:",
          "content": "Base64",
          "type": "String"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/home/ymh/www/aix-system/app/Http/Controllers/Api/V1/WX/Person/HomeController.php",
    "groupTitle": "个人"
  },
  {
    "type": "post",
    "url": "/api/v1/wx/person/memberInfo/updateInfo",
    "title": "更新个人的基本信息",
    "name": "memberInfo_updateInfo",
    "group": "GroupPerson",
    "permission": [
      {
        "name": "token"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>个人ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id_card",
            "description": "<p>身份证号码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "birthday",
            "description": "<p>出生年份</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "card_t_cn",
            "description": "<p>证件类型</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "education",
            "description": "<p>学历</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>邮箱</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "experience",
            "description": "<p>工作经验</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "height",
            "description": "<p>身高</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "householdaddress",
            "description": "<p>籍贯</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "major",
            "description": "<p>专业</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "marriage",
            "description": "<p>婚姻状况{1:未婚,2:已婚,3:保密}</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>电话号码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "qq",
            "description": "<p>QQ号码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "realname",
            "description": "<p>姓名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "residence",
            "description": "<p>现居住地</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sex",
            "description": "<p>性别 {1:男,2:女}</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "techlevel",
            "description": "<p>技能等级</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "weixin",
            "description": "<p>微信号</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求示例:",
          "content": "详细字段注释请看 http://develop.doc.jsaix.cn/web/#/9?page_id=128\n\n {\n\"id\": 88,\n\"realname\": \"李铁雁\",\n\"birthday\": \"1972\",\n\"card_t_cn\": \"306\",\n\"id_card\": \"51012619720721522x\",\n\"householdaddress\": \"10.115.1205\",\n\"residence\": \"10.108.1141\",\n\"education\": \"69\",\n\"experience\": \"76\",\n\"phone\": \"15365917102\",\n\"techlevel\": 381,\n\"email\": \"9314442758@qq.com\",\n\"height\": \"200\",\n\"major\": \"\",\n\"marriage\": \"1\",\n\"qq\": \"88488888\",\n\"sex\": 1,\n\"weixin\": \"\"\n}",
          "type": "String"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "成功200:",
          "content": "{\n\"status\": 200,\n\"msg\": \"success\",\n\"data\": {\n\"code\":1\n}\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/home/ymh/www/aix-system/app/Http/Controllers/Api/V1/WX/Person/MembersController.php",
    "groupTitle": "个人"
  },
  {
    "type": "post",
    "url": "api/v1/wx/person/memberInfo/passwordInfo",
    "title": "修改密码",
    "name": "memberinfo_pwd",
    "group": "GroupPerson",
    "permission": [
      {
        "name": "token"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "oldpassword",
            "description": "<p>旧密码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>新密码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password1",
            "description": "<p>确认密码</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求示例:",
          "content": "{\n\"oldpassword\": \"123123\",\n\"password\": \"123456\",\n\"password1\": \"123456\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "错误200:",
          "content": "{\n\"status\": 200,\n\"msg\": \"success\",\n\"data\": {\n\"status\": 0,\n\"info\": \"原密码错误\"\n}\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "成功200:",
          "content": "{\n\"status\": 200,\n\"msg\": \"删除成功!\",\n\"data\": \"删除成功!\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/home/ymh/www/aix-system/app/Http/Controllers/Api/V1/WX/Person/MembersController.php",
    "groupTitle": "个人"
  },
  {
    "type": "post",
    "url": "/api/v1/wx/person/register",
    "title": "个人用户注册",
    "name": "person_register",
    "group": "GroupPerson",
    "parameter": {
      "examples": [
        {
          "title": "请求参数:",
          "content": "{\n\"reg_type\": \"1\", //固定\n\"mobile\": \"13022592262\", //手机号\n\"type\": \"register\", //固定\n\"mobile_vcode\": \"123123\", //验证码\n\"password\": \"12312312312313\", //密码\n\"password_confirmation\": \"12312312312313\", //重复密码\n\"agreement\": \"1\", //固定\n\"id_card\": \"511622199208297716\", //身份证号码\n\"utype\": \"2\", //固定\n\"reg_source\": 2, //固定\n\"card_t_cn\": \"306\" //身份证件id,\n\"code\":\"00154Vo62o2DrR0Poiq62ujMo6254Voy\"  //code码(这是微信授权之后注册需要带的)\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "注册成功:",
          "content": "{\n\"status\": 200,\n\"msg\": \"success\",\n\"data\": {\n\"token\": \"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8venAudG9wOjUyMDAvYXBpL3YxL3d4L3BlcnNvbi9yZWdpc3RlciIsImlhdCI6MTU3MzYzNjUxNCwiZXhwIjoxNTc0MzU2NTE0LCJuYmYiOjE1NzM2MzY1MTQsImp0aSI6IkR4ZkdqVWwzcnMzM0RreHciLCJzdWIiOjQ1MiwicHJ2IjoiODY2NWFlOTc3NWNmMjZmNmI4ZTQ5NmY4NmZhNTM2ZDY4ZGQ3MTgxOCJ9.yGeslTU-qAm_PgHFxGDSIYBfarf1dgy0ZjgZfbP9ygk\"\n}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/home/ymh/www/aix-system/app/Http/Controllers/Api/V1/WX/Person/HomeController.php",
    "groupTitle": "个人"
  },
  {
    "type": "get",
    "url": "/api/v1/wx/person/userinfo",
    "title": "获取个人的用户信息",
    "name": "person_userinfo",
    "group": "GroupPerson",
    "permission": [
      {
        "name": "token"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "成功200:",
          "content": "{\nmember_info:\"个人的基本信息\",\n\"resumes\":\"所有简历\",\n\"def_resume\":\"默认简历\",\n\"points\":\"积分\",\n\"applyJobs\":\"职位申请个数\",\n\"interview\":\"面试邀请个数\",\n\"isSign\":\"是否签到\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/home/ymh/www/aix-system/app/Http/Controllers/Api/V1/WX/Person/HomeController.php",
    "groupTitle": "个人"
  },
  {
    "type": "get",
    "url": "api/v1/wx/public/category_districts_search?search_key=北京",
    "title": "城市名称搜索",
    "name": "category_districts_search",
    "group": "GroupPublic",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "search_key",
            "description": "<p>搜索关键字</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功200:",
          "content": "{\n\"status\": 200,\n\"msg\": \"success\",\n\"data\": {\n\"id\": 1,\n\"parent_id\": 0,\n\"name\": \"北京\",\n\"order\": 1,\n\"spell\": \"beijing\",\n\"created_at\": \"2018-09-28 22:13:21\",\n\"updated_at\": \"2018-09-29 01:30:19\",\n\"deleted_at\": null\n}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/home/ymh/www/aix-system/app/Http/Controllers/Api/V1/WX/Company/HomeController.php",
    "groupTitle": "公共"
  },
  {
    "type": "get",
    "url": "api/v1/wx/public/category_jobs_search?search_key=李铁燕",
    "title": "模糊搜索职位类别的名称",
    "name": "category_jobs_search",
    "group": "GroupPublic",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "search_key",
            "description": "<p>搜索关键字</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功200:",
          "content": "{\n\"status\": 200,\n\"msg\": \"success\",\n\"data\": [\n{\n\"id\": 334,\n\"parent_id\": 36,\n\"name\": \"程序员\",\n\"order\": 0,\n\"spell\": \"chengxuyuan\",\n\"created_at\": \"2018-10-11 23:39:25\",\n\"updated_at\": \"2019-09-29 13:14:08\",\n\"deleted_at\": null\n}\n]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/home/ymh/www/aix-system/app/Http/Controllers/Api/V1/WX/Company/HomeController.php",
    "groupTitle": "公共"
  },
  {
    "type": "get",
    "url": "/api/v1/wx/public/backendConfig",
    "title": "获取后台的配置项",
    "name": "backendConfig",
    "group": "GroupSystem",
    "version": "1.0.0",
    "success": {
      "examples": [
        {
          "title": "成功200:",
          "content": "{\n\"subsite\": \"分站信息\",\n\"close_reg\": \"是否关闭注册,0没关,其他就是关着的\",\n\"hong_kong_reg\": \"是否开启港澳台注册 1:开启\"\n\"sms\": \"是否开启短信服务 true:开启\"\n\"logo\": \"系统的logo\",\n\"logo_white\": \"系统的logo(白底)\",\n\"logo_mini\": \"系统的迷你 logo\",\n\"logo_white_mini\": \"系统的迷你 logo(白底)\",\n\"district\": \"系统默认的地区,创建简历的工作地区默认\"\n\"upload_asset\":\"用户拼接图片地址  upload_asset+images_path\"\n\"resume_man_png\":\"简历默认的男\",\n\"resume_woman_png\":\"简历默认的女\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "/home/ymh/www/aix-system/app/Http/Controllers/Api/V1/WX/Company/HomeController.php",
    "groupTitle": "系统设置"
  },
  {
    "type": "get",
    "url": "/api/v1/wx/config",
    "title": "获取后台的的配置信息",
    "name": "system_config",
    "group": "GroupSystem",
    "success": {
      "examples": [
        {
          "title": "返回说明:",
          "content": "详见   http://develop.doc.jsaix.cn/web/#/9?page_id=147",
          "type": "String"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/home/ymh/www/aix-system/app/Http/Controllers/Api/V1/WX/Company/HomeController.php",
    "groupTitle": "系统设置"
  },
  {
    "type": "get",
    "url": "/api/v1/wx/auth/uuid",
    "title": "生成一个唯一ID",
    "name": "system_uuid",
    "group": "GroupSystem",
    "success": {
      "examples": [
        {
          "title": "请求成功:",
          "content": "{\"status\":200,\"msg\":\"88d1d3560c43a6d4df329f416a02e8d16b577e82\",\"data\":\"88d1d3560c43a6d4df329f416a02e8d16b577e82\"}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/home/ymh/www/aix-system/app/Http/Controllers/Api/V1/WX/AuthController.php",
    "groupTitle": "系统设置"
  },
  {
    "type": "get",
    "url": "api/v1/wx/public/validate/resume?card_t_cn=306&id_card=510524199510205460",
    "title": "验证身份证格式",
    "name": "validate_resume",
    "group": "GroupSystem",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "card_t_cn",
            "description": "<p>身份证类型</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id_card",
            "description": "<p>身份证号码</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "错误200:",
          "content": "{\n\"status\": 0,\n\"msg\": \"证件号格式错误\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "成功200:",
          "content": "{\n\"status\": 200,\n\"msg\": \"证件号格式正确\",\n\"data\": \"证件号格式正确\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/home/ymh/www/aix-system/app/Http/Controllers/Api/V1/WX/Person/HomeController.php",
    "groupTitle": "系统设置"
  },
  {
    "type": "post",
    "url": "/api/v1/wx/person/resume/language_del",
    "title": "删除语言",
    "name": "language_del",
    "group": "GroupUserResume",
    "permission": [
      {
        "name": "token"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "请求示例:",
          "content": "{\n\"id\":\"897\",\n\"resume_id\":\"713\" //简历ID\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "200:",
          "content": "{\n\"status\": 200,\n\"msg\": \"删除成功!\",\n\"data\": \"删除成功!\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/home/ymh/www/aix-system/app/Http/Controllers/Api/V1/WX/Person/ResumeController.php",
    "groupTitle": "个人简历"
  },
  {
    "type": "post",
    "url": "/api/v1/wx/person/resume/resumeCredentDelete",
    "title": "删除证书",
    "name": "resumeCredentDelete",
    "group": "GroupUserResume",
    "permission": [
      {
        "name": "token"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "id",
            "description": "<p>证书ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "resume_id",
            "description": "<p>简历ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求示例:",
          "content": "{\n\"resume_id\":711,\n\"id\":\"307\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "错误200:",
          "content": "{\n\"status\": 0,\n\"msg\": \"简历不存在\"\n}\n{\n\"status\": 0,\n\"msg\": \"默认简历不能删除！\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "成功200:",
          "content": "{\n\"status\": 200,\n\"msg\": \"删除成功!\",\n\"data\": \"删除成功!\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/home/ymh/www/aix-system/app/Http/Controllers/Api/V1/WX/Person/ResumeController.php",
    "groupTitle": "个人简历"
  },
  {
    "type": "post",
    "url": "/api/v1/wx/person/resume/resumeEduDelete",
    "title": "删除教育经历",
    "name": "resumeEduDelete",
    "group": "GroupUserResume",
    "permission": [
      {
        "name": "token"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>教育经历ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "resume_id",
            "description": "<p>简历ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求示例:",
          "content": "{\n\"resume_id\":\"792\",\n\n\"id\":\"486\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "成功200:",
          "content": "{\n    \"status\": 200,\n    \"msg\": \"删除成功!\",\n    \"data\": \"删除成功!\"\n    }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/home/ymh/www/aix-system/app/Http/Controllers/Api/V1/WX/Person/ResumeController.php",
    "groupTitle": "个人简历"
  },
  {
    "type": "post",
    "url": "api/v1/wx/person/resumes/resumeEducationAdd",
    "title": "添加(修改)教育经历",
    "name": "resumeEducationAdd",
    "group": "GroupUserResume",
    "permission": [
      {
        "name": "token"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>教育经历ID,修改时候需要</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "school",
            "description": "<p>学校</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "education",
            "description": "<p>学历id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "startyear",
            "description": "<p>开始年份</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "startmonth",
            "description": "<p>开始月份</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "endyear",
            "description": "<p>结束年份</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "endmonth",
            "description": "<p>结束月份</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "todate",
            "description": "<p>为1 就是至今</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求示例:",
          "content": "{\n    \"resume_id\":\"792\",\n    \"school\":\"五道口职业技术学院\",\n    \"education\":\"66\",\n    \"speciality\":\"软件工程\",\n    \"startyear\":2019,\n    \"startmonth\":1,\n    \"endyear\":\"2020\",\n    \"endmonth\":\"3\",\n    \"id\":\"486\"\n\n    }",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "成功200:",
          "content": "会返回所有的教育经历",
          "type": "String"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/home/ymh/www/aix-system/app/Http/Controllers/Api/V1/WX/Person/ResumeController.php",
    "groupTitle": "个人简历"
  },
  {
    "type": "post",
    "url": "/api/v1/wx/person/resumes/resumeWorkAdd",
    "title": "添加(修改)工作经历",
    "name": "resumeWorkAdd",
    "group": "GroupUserResume",
    "permission": [
      {
        "name": "token"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>工作经历ID (带了就是修改)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "resume_id",
            "description": "<p>简历ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "startyear",
            "description": "<p>开始年份</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "startmonth",
            "description": "<p>开始月份</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "companyname",
            "description": "<p>公司,名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "jobs",
            "description": "<p>职位</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "achievements",
            "description": "<p>职责</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "endyear",
            "description": "<p>结束年份</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "todate",
            "description": "<p>如果选择的是至今,那么就带1,其他就不用带</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求示例:",
          "content": "{\n\"resume_id\":\"834\",\n\"startyear\":\"2019\",\n\"startmonth\":\"9\",\n\"companyname\":\"北京大兴国际机场\",\n\"jobs\":\"保洁人员\",\n\"achievements\":\"倒垃圾\",\n\"endyear\":\"2020\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "成功200:",
          "content": "会返回所有的工作经历",
          "type": "String"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/home/ymh/www/aix-system/app/Http/Controllers/Api/V1/WX/Person/ResumeController.php",
    "groupTitle": "个人简历"
  },
  {
    "type": "post",
    "url": "/api/v1/wx/person/resumes/resumeCreateNew",
    "title": "网络招聘会中添加个人简历",
    "name": "resume_add_new",
    "group": "GroupUserResume",
    "permission": [
      {
        "name": "token"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "请求示例(postman中):",
          "content": "参数的解释详见 \"http://develop.doc.jsaix.cn/web/#/9?page_id=164\"",
          "type": "String"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "添加成功会返回简历的ID:",
          "content": "{\n\"status\": 200,\n\"msg\": \"success\",\n\"data\": {\n\"id\": 606,\n\"tag\": null\n}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/home/ymh/www/aix-system/app/Http/Controllers/Api/V1/WX/Person/ResumeController.php",
    "groupTitle": "个人简历"
  },
  {
    "type": "post",
    "url": "/api/v1/wx/person/resume/del.do",
    "title": "删除简历",
    "name": "resume_del",
    "group": "GroupUserResume",
    "permission": [
      {
        "name": "token"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>简历ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求示例:",
          "content": "{\n\"id\":720\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "错误200:",
          "content": "{\n\"status\": 0,\n\"msg\": \"简历不存在\"\n}\n{\n\"status\": 0,\n\"msg\": \"默认简历不能删除！\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "成功200:",
          "content": "{\n\"status\": 200,\n\"msg\": \"删除成功!\",\n\"data\": \"删除成功!\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/home/ymh/www/aix-system/app/Http/Controllers/Api/V1/WX/Person/ResumeController.php",
    "groupTitle": "个人简历"
  },
  {
    "type": "post",
    "url": "/api/v1/wx/person/resume/image",
    "title": "上传照片/作品",
    "name": "resume_image",
    "group": "GroupUserResume",
    "permission": [
      {
        "name": "token"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "images",
            "description": "<p>图片地址,不带上http</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "resume_id",
            "description": "<p>简历ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>标题</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "id",
            "description": "<p>带上就是修改</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求示例:",
          "content": "{\n\"images\":\"person/images/j5XGfadZmoykHvQ7CxEGUWBFgmZVzCXeF2yhyFmI.jpeg\",\n\"resume_id\":\"713\",\n\"title\":\"123\",\n\"id\":\"\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "错误200:",
          "content": "{\n\"status\": 0,\n\"msg\": \"简历不存在\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "成功200:",
          "content": "{\n\"code\": 1,\n\"info\": \"上传成功!\",\n\"data\": \"person/images/j5XGfadZmoykHvQ7CxEGUWBFgmZVzCXeF2yhyFmI.jpeg\",\n\"id\": 415\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/home/ymh/www/aix-system/app/Http/Controllers/Api/V1/WX/Person/ResumeController.php",
    "groupTitle": "个人简历"
  },
  {
    "type": "post",
    "url": "/api/v1/wx/person/resume/image_del",
    "title": "删除照片",
    "name": "resume_image_del",
    "group": "GroupUserResume",
    "permission": [
      {
        "name": "token"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "id",
            "description": "<p>照片ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "resume_id",
            "description": "<p>简历ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求示例:",
          "content": "{\n\"resume_id\":\"713\",\n\"id\":\"416\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "错误200:",
          "content": "{\n\"status\": 0,\n\"msg\": \"简历不存在\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "成功200:",
          "content": "{\n\"status\": 200,\n\"msg\": \"删除成功!\",\n\"data\": \"删除成功!\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/home/ymh/www/aix-system/app/Http/Controllers/Api/V1/WX/Person/ResumeController.php",
    "groupTitle": "个人简历"
  },
  {
    "type": "post",
    "url": "/api/v1/wx/person/resume/resumeCredentAdd",
    "title": "添加(修改)证书",
    "name": "resume_resumeCredentAdd",
    "group": "GroupUserResume",
    "permission": [
      {
        "name": "token"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>证书id (带了就是修改)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求示例:",
          "content": "{\n\"resume_id\":\"713\", //简历ID\n\"name\":\"php\", //证书名称\n\"year\":\"2018\", //获取年份\n\"month\":4 //获取月份\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "200:",
          "content": "{\n\"status\": 200,\n\"msg\": \"保存成功!\",\n\"data\": \"保存成功!\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/home/ymh/www/aix-system/app/Http/Controllers/Api/V1/WX/Person/ResumeController.php",
    "groupTitle": "个人简历"
  },
  {
    "type": "post",
    "url": "/api/v1/wx/person/resume/resumeTrainAdd",
    "title": "添加(修改)培训经历",
    "name": "resume_resumeTrainAdd",
    "group": "GroupUserResume",
    "permission": [
      {
        "name": "token"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>培训经历id (带了就是修改)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求示例:",
          "content": "{\n\"resume_id\":713,  //简历ID\n\"agency\":\"培训机构\",\n\"course\":\"培训课程\",\n\"startyear\":\"2014\", //开始年份\n\"startmonth\":\"6\", //开始月份\n\"endyear\":\"2019\",//结束年份\n\"endmonth\":\"2\", //结束月份\n\"todate\":0, //是否是至今\n\"description\":\"培训内容\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "请求成功:",
          "content": "{\n\"status\": 200,\n\"msg\": \"保存成功!\",\n\"data\": \"保存成功!\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/home/ymh/www/aix-system/app/Http/Controllers/Api/V1/WX/Person/ResumeController.php",
    "groupTitle": "个人简历"
  },
  {
    "type": "post",
    "url": "/api/v1/wx/person/resume/resumeTrainDelete",
    "title": "删除培训经历",
    "name": "resume_resumeTrainDelete",
    "group": "GroupUserResume",
    "permission": [
      {
        "name": "token"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>培训经历ID</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "resume_id",
            "description": "<p>简历ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求示例:",
          "content": "{\n \"resume_id\":711,\n \"id\":\"203\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "错误200:",
          "content": "{\n \"status\": 0,\n \"msg\": \"简历不存在\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "成功200:",
          "content": "{\n\"status\": 200,\n\"msg\": \"删除成功!\",\n\"data\": \"删除成功!\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/home/ymh/www/aix-system/app/Http/Controllers/Api/V1/WX/Person/ResumeController.php",
    "groupTitle": "个人简历"
  },
  {
    "type": "post",
    "url": "api/v1/wx/person/resume/resumeWorkDelete",
    "title": "删除工作经历",
    "name": "resume_resumeWorkDelete",
    "group": "GroupUserResume",
    "permission": [
      {
        "name": "token"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>工作经历ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "resume_id",
            "description": "<p>简历ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求示例:",
          "content": "{\n\"id\":\"428\",\n\"resume_id\":\"258\"\n\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "成功200:",
          "content": "{\n\"status\": 200,\n\"msg\": \"删除成功!\",\n\"data\": \"删除成功!\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/home/ymh/www/aix-system/app/Http/Controllers/Api/V1/WX/Person/ResumeController.php",
    "groupTitle": "个人简历"
  },
  {
    "type": "post",
    "url": "/api/v1/wx/person/resume/tag_del",
    "title": "删除标签",
    "name": "resume_tag_del",
    "group": "GroupUserResume",
    "permission": [
      {
        "name": "token"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "请求示例:",
          "content": "{\n\"resume_id\":\"713\",\n\"tag_cn\":\"海归\" //直接带要删除的中文名\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "成功200:",
          "content": "{\n\"status\": 200,\n\"msg\": \"删除成功\",\n\"data\": \"删除成功\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/home/ymh/www/aix-system/app/Http/Controllers/Api/V1/WX/Person/ResumeController.php",
    "groupTitle": "个人简历"
  },
  {
    "type": "post",
    "url": "/api/v1/wx/person/resume/tag_save",
    "title": "修改特长标签",
    "name": "resume_tag_save",
    "group": "GroupUserResume",
    "permission": [
      {
        "name": "token"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "请求示例:",
          "content": "{\n\"resume_id\":\"713\",\n\"tag\":[168,172,175],  在配置 AIX_resumetag中\n\"tag_cn\":[\"能出差\",\"高学历\",\"海归\"]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "成功200:",
          "content": "{\n\"status\": 200,\n\"msg\": \"更新成功!\",\n\"data\": \"更新成功!\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/home/ymh/www/aix-system/app/Http/Controllers/Api/V1/WX/Person/ResumeController.php",
    "groupTitle": "个人简历"
  },
  {
    "type": "get",
    "url": "api/v1/wx/person/resumes_ok",
    "title": "获取个人审核通过的简历",
    "name": "resumes_ok",
    "group": "GroupUserResume",
    "permission": [
      {
        "name": "token"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "成功200:",
          "content": "{\n    \"status\": 200,\n    \"msg\": \"success\",\n    \"data\": [\n    {\n    \"resume_id\": 191,\n    \"resume_name\": \"简历20190131103133\"\n    },\n    {\n    \"resume_id\": 825,\n    \"resume_name\": \"简历20190131103133\"\n    }\n    ]\n    }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/home/ymh/www/aix-system/app/Http/Controllers/Api/V1/WX/Person/MembersController.php",
    "groupTitle": "个人简历"
  },
  {
    "type": "get",
    "url": "/api/v1/wx/person/resumes/show?id=717",
    "title": "查看某个简历信息",
    "name": "resumes_show",
    "group": "GroupUserResume",
    "permission": [
      {
        "name": "token"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>简历ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "complete_percent",
            "description": "<p>简历完整度</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "work_list",
            "description": "<p>工作经历</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "training_list",
            "description": "<p>培训经历</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "language_list",
            "description": "<p>语言能力</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "tag_cn",
            "description": "<p>特长标签</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "credent_list",
            "description": "<p>证书</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "specialty",
            "description": "<p>自我描述</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "/home/ymh/www/aix-system/app/Http/Controllers/Api/V1/WX/Person/ResumeController.php",
    "groupTitle": "个人简历"
  },
  {
    "type": "post",
    "url": "api/v1/wx/person/resumes/updHunt",
    "title": "修改简历的求职意向",
    "name": "resumes_updHunt",
    "group": "GroupUserResume",
    "permission": [
      {
        "name": "token"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "请求示例:",
          "content": " {\n\"id\": \"255\", //{简历ID}\n\"techlevel\": 381, //技能等级\n\"current\": \"242\", //当前状态\n\"nature\": \"62\", {//工作性质}\n\"trade\": \"1,2,4\",  //{期望行业,可以选择多个用,隔开}\n\"intention_jobs_id\": \"1.16.113,1.16.114,1.16.115\", //{期望职位,可以选择多个用,隔开}\n\"district\": \"10.108.0\", //{地区}\n\"wage\": \"61\", //月薪分类\n\"wage_min\": \"10000\", //{最低工资}\n\"wage_max\": \"0\",   //{最高工资}\n\"subsite_id\": \"\" //{分站不需要传值}\n\"experience\": \"\" //{工作经验id}\n\"residence\": \"\" //{现居住地址}\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "成功200:",
          "content": "{\n\"status\": 200,\n\"msg\": \"更新成功\",\n\"data\": \"更新成功\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/home/ymh/www/aix-system/app/Http/Controllers/Api/V1/WX/Person/ResumeController.php",
    "groupTitle": "个人简历"
  },
  {
    "type": "post",
    "url": "/api/v1/wx/person/resume/save_language",
    "title": "添加(修改)语言",
    "name": "save_language",
    "version": "3.1.0",
    "group": "GroupUserResume",
    "permission": [
      {
        "name": "token"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "请求示例:",
          "content": "{\n\"id\":\"\", //ID 带上就是修改\n\"resume_id\":\"713\", //简历ID\n\"language\":\"208\", //语言ID (配置项的AIX_language)\n\"level\":293 //级别ID  (配置项的AIX_language_level)\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "请求成功:",
          "content": "{\n\"status\": 200,\n\"msg\": \"保存成功!\",\n\"data\": \"保存成功!\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "/home/ymh/www/aix-system/app/Http/Controllers/Api/V1/WX/Person/ResumeController.php",
    "groupTitle": "个人简历"
  },
  {
    "type": "post",
    "url": "/api/v1/wx/person/resumes/updateSpecialty",
    "title": "更新个人描述",
    "name": "updateSpecialty",
    "group": "GroupUserResume",
    "permission": [
      {
        "name": "token"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "id",
            "description": "<p>简历ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Text",
            "optional": false,
            "field": "specialty",
            "description": "<p>描述</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求示例:",
          "content": "{\n\"id\":711,\n\"specialty\":\"JAVA\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "错误200:",
          "content": "{\n\"status\": 0,\n\"msg\": \"简历不存在\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "成功200:",
          "content": "{\n\"status\": 200,\n\"msg\": \"更新成功！\",\n\"data\": \"更新成功！\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/home/ymh/www/aix-system/app/Http/Controllers/Api/V1/WX/Person/ResumeController.php",
    "groupTitle": "个人简历"
  },
  {
    "type": "POST",
    "url": "/api/v1/wx/auth/DecryptUnionId",
    "title": "微信登录",
    "name": "Wechat_Login",
    "group": "GroupWeChat",
    "parameter": {
      "examples": [
        {
          "title": "请求说明先使用wx.login 获取code 然后再使用 wx.getUserInfo 如果是想选择使用某个appid   带上app_key_type:company  会选择企业的appid",
          "content": "前端代码示例查看 http://develop.doc.jsaix.cn/web/#/9?page_id=267\n如果是解密手机号的话 加上参数 decode_type=phone\n解密手機的話,无论是否注册过,都会返回一个token 信息,之前是否注册的信息是在Register中体现出来,没注册的自动用手机号码注册账号",
          "type": "Text"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "请求成功:",
          "content": "{\n \"Register\":true    //true 就是绑定过,会连带返回token,false是没有注册过,然后再去注册\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "会出现的错误:",
          "content": "验签失败\n该微信账号已经绑定了其它账号, 请重试\n微信登陆失败,请使用账号密码登陆!",
          "type": "String"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/home/ymh/www/aix-system/app/Http/Controllers/Api/V1/WX/AuthController.php",
    "groupTitle": "微信授权模块"
  }
] });
