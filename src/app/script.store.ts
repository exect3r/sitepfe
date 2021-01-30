interface Scripts {
    name: string;
    src: string;
}
export const ScriptStore: Scripts[] = [
    { name: "calender", src: "assets/js/page/calendar.js" },
    { name: "vendor.bundle", src: "assets/bundles/lib.vendor.bundle.js" },
    { name: "fullcalender.bundle", src: "assets/plugins/fullcalendar/fullcalendar.js" },
    { name: "bootstrap-datepicker", src: "assets/plugins/bootstrap-datepicker/js/bootstrap-datepicker.min.js" },
    { name: "dropify.bundle", src: "assets/plugins/dropify/js/dropify.min.js" },
    { name: "summernote.bundle", src: "assets/plugins/summernote/dist/summernote.js" },
    { name: "dropify", src: "assets/js/form/dropify.js" },
    { name: "summernote", src: "assets/js/page/summernote.js" },
    { name: "jquery", src: "assets/plugins/jquery/jquery.min.js" },
    { name: "bootstrap", src: "assets/plugins/bootstrap/js/bootstrap.js" },
    { name: "jquery.ui", src: "assets/plugins/fullcalendar/jqueryui.min.js" },
    { name: "moment", src: "assets/plugins/fullcalendar/moment.min.js" },
];