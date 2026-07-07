function pg_edit_admin_popup(tab, type, id, gid)
{
    jQuery('#pg_edit_group_html_container').html('<div class="pg-edit-group-popup-loader"><div class="pm-loader"></div></div>');
    var pmDomColor = jQuery(".pmagic").find("a").css('color');
    jQuery(".pm-loader").css('border-top-color', pmDomColor);
    jQuery('#pm-edit-group-popup, .pm-popup-mask, .pg-blog-dialog-mask').toggle();
    var data = {action: 'pm_edit_group_popup_html', tab: tab, type: type, id: id, gid: gid};

    jQuery.post(pm_ajax_object.ajax_url, data, function (response) {
        if (response)
        {
            bgcolor = pmDomColor.replace(')', ',0.2)');
            jQuery('#pg_edit_group_html_container').html(response);
            jQuery('#pm-edit-group-popup .group_leader_secondary').select2(
                    {
                        maximumSelectionLength: 5,
                        placeholder: pm_group_multi_admins.select_multiple_secondary + " " + pm_manager_label,
                language: {
                            maximumSelected: function (e) {
            var t = pm_group_multi_admins.you_can_only_select + " " + e.maximum + " " + pm_manager_label;
            return t;
        },

      noResults: function() {
        return pm_group_multi_admins.no_user;
      }
    },
     templateSelection: function (selection,container) {
        jQuery(container).css('background-color', bgcolor);
         jQuery(container).css('border-color', pmDomColor);
         jQuery(container).css('color', pmDomColor);
        if (!selection.id) { return selection.text; }
               var $state = $(
               '<span>' + selection.text + '</span>'
              );
      
              return $state;
      },
    templateResult: formatOptions
}
              
                    );
            jQuery("#pm-edit-group-popup .select2-selection__choice").css('background-color', bgcolor);
            function formatOptions (state) {
              if (!state.id) { return state.text; }
               var $state = $(
               '<img src="' + state.element.dataset.img + '" width="26" height="26" class="user-profile-image" /> <span>' + state.text + '</span>'
              );
              return $state;
            }
            jQuery('.select2-container').on('click', function() {
                jQuery(".select2-dropdown--below").parent().addClass("pm_select2_dropdown");
            });
           
          
            jQuery('#pm-edit-group-popup .pm-popup-close, .pg-group-setting-close-btn ').on('click', function (e) {
                jQuery('.pm-popup-mask, #pm-edit-group-popup, .pg-blog-dialog-mask').hide();
            });
            
            
            
         
         
        }
    });

}

function pg_edit_admin_bulk_popup(tab, type, gid)
{

    var ids = [];
    jQuery('input.pg-admin-checked[type="checkbox"]:checked').each(function () {
        ids.push(jQuery(this).val());
    });

    jQuery('#pg_edit_group_html_container').html('<div class="pg-edit-group-popup-loader"><div class="pm-loader"></div></div>');
    var pmDomColor = jQuery(".pmagic").find("a").css('color');
    jQuery(".pm-loader").css('border-top-color', pmDomColor);

    jQuery('#pm-edit-group-popup, .pm-popup-mask, .pg-blog-dialog-mask').toggle();

    var data = {action: 'pm_edit_group_popup_html', tab: tab, type: type, gid: gid, id: ids};
    jQuery.post(pm_ajax_object.ajax_url, data, function (response) {
        if (response)
        {
            bgcolor = pmDomColor.replace(')', ',0.2)');
            jQuery('#pg_edit_group_html_container').html(response);
            jQuery("#pm-edit-group-popup .pg-users-send-box .pm-message-username").css('background-color', bgcolor);
            jQuery("#pm-edit-group-popup .pg-users-send-box .pm-message-username").css('border-color', pmDomColor);
            jQuery("#pm-edit-group-popup .pg-users-send-box .pm-message-username").css('color', pmDomColor);
            jQuery('#pm-edit-group-popup .pm-popup-close, .pg-group-setting-close-btn ').on('click', function (e) {
                jQuery('.pm-popup-mask, #pm-edit-group-popup').hide();
            });
        }
    });
}


function pm_filter_admins(pagenum)
{
    var gid = jQuery('#pg-groupid').val();
    var sortby = jQuery('#admin_sort_by').find(":selected").val();
    var search = jQuery('#admin_search').val();
    var data = {action: 'pm_get_all_admins_from_group', gid: gid, sortby: sortby, search: search, pagenum: pagenum};
    jQuery.post(pm_ajax_object.ajax_url, data, function (response) {
        console.log(response);
        jQuery('#pm-edit-admin-member-html-container').html(response);
    });
}

function pg_checked_all_admins(a)
{
    if (jQuery(a).is(':checked'))
    {
        jQuery('input.pg-admin-checked:checkbox').attr('checked', true);
        pm_show_hide_batch_operation('admins');
    } else
    {
        jQuery('input.pg-admin-checked:checkbox').attr('checked', false);
        pm_show_hide_batch_operation('admins');
    }
}

function pg_add_group_admin_cog_item()
{
      jQuery('.errortext').html('');
	jQuery('.errortext').hide();
        jQuery("#pg_add_admin").ajaxForm({
            target: '#pg_edit_group_html_container',
            success: function () {
                pm_filter_admins(1);
            }
        }).submit();
    jQuery('#pg_edit_group_html_container').html('<div class="pg-edit-group-popup-loader"><div class="pm-loader"></div></div>');
    var pmDomColor = jQuery(".pmagic").find("a").css('color');
    jQuery(".pm-loader").css('border-top-color', pmDomColor);
}


function pg_add_group_admin()
{
    if(jQuery('select.group_leader_secondary').val() == null){
        jQuery('select.group_leader_secondary').siblings('.errortext').html(pm_error_object.required_field);
	jQuery('select.group_leader_secondary').siblings('.errortext').show();
    }
    else
    {   
        jQuery('.errortext').html('');
	jQuery('.errortext').hide();
        jQuery("#pg_add_admin").ajaxForm({
            target: '#pg_edit_group_html_container',
            success: function () {
                pm_filter_admins(1);
            }
        }).submit();
    jQuery('#pg_edit_group_html_container').html('<div class="pg-edit-group-popup-loader"><div class="pm-loader"></div></div>');
    var pmDomColor = jQuery(".pmagic").find("a").css('color');
    jQuery(".pm-loader").css('border-top-color', pmDomColor);
    }
}

function pg_add_single_cog_group_admin(uid)
{
    jQuery("#pg_add_admin_" + uid).ajaxForm({
        target: '#pg_edit_group_html_container',
        success: function () {

        }
    }).submit();
    jQuery('#pg_edit_group_html_container').html('<div class="pg-edit-group-popup-loader"><div class="pm-loader"></div></div>');
    var pmDomColor = jQuery(".pmagic").find("a").css('color');
    jQuery(".pm-loader").css('border-top-color', pmDomColor);
}

function pm_remove_admin_from_group()
{
    jQuery("#pg_remove_admin").ajaxForm({
        target: '#pg_edit_group_html_container',
        success: function () {
        pm_filter_admins(1);
        }
    }).submit();
    jQuery('#pg_edit_group_html_container').html('<div class="pg-edit-group-popup-loader"><div class="pm-loader"></div></div>');
    var pmDomColor = jQuery(".pmagic").find("a").css('color');
    jQuery(".pm-loader").css('border-top-color', pmDomColor);
}

function pg_submit_admin_message()
{
    jQuery('#pg_send_admin_message .errortext').html('');
    jQuery('#pg_send_admin_message .errortext').hide();
    var content = jQuery('#pm_author_message').val();
    if (content.trim() != '')
    {
        jQuery("#pg_send_admin_message").ajaxForm({
            target: '#pg_edit_group_html_container',
            success: function () {

            }
        }).submit();
        jQuery('#pg_edit_group_html_container').html('<div class="pg-edit-group-popup-loader"><div class="pm-loader"></div></div>');
        var pmDomColor = jQuery(".pmagic").find("a").css('color');
        jQuery(".pm-loader").css('border-top-color', pmDomColor);
    } else
    {
        jQuery('#pg_send_admin_message .errortext').html('<div class="pg-failed-message pm-dbfl">' + pm_error_object.empty_message_error + '</div>');
        jQuery('#pg_send_admin_message .errortext').show();
    }
}
